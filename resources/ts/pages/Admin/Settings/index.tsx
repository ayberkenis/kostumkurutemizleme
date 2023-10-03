import React from "react";
import { usePage } from "@inertiajs/react";
import Layout from "@/layouts/Layout";
import axios from "axios";

function SettingSection({ setting }) {
  const auth = usePage().props as any;
  const [form, setForm] = React.useState({});

  // Initialize the form state with the setting values when the component mounts
  React.useEffect(() => {
    setForm({
      ...setting, // Spread the setting values into the form state
    });
  }, [setting]); // Run this effect when the 'setting' prop changes

  
  
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setForm({...form, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(e.target);
    console.log(form);
    e.preventDefault();
    axios
    .put(`/admin/ayarlar/kaydet`, form)
    .then((res) => {
        console.log(res);
      })
    .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex flex-col gap-4 w-full mx-auto border border-black px-8 py-8 border-opacity-25 rounded-sm">
        <h2 className="font-poppins text-lg">{form.display_name}</h2>
        <p className="font-poppins tracking-wider text-sm text-gray-500 font-regular my-4">
          {form.description}
        </p>
        {form.type === "select" && eval(form.options) ? (
          <select
            name="value" // Add a 'name' attribute to the select element
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
            value={form.value}
          >
            {eval(form.options).map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={form.type}
            name="value" // Add a 'name' attribute to the input element
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
            value={form.value ? form.value : "None"}
          />
        )}
        <button
          onClick={handleSubmit}
          className="bg-zinc-700 hover:bg-zinc-500 w-full px-3 py-2 mt-1 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
        >
          Kaydet
        </button>
      </div>
    </>
  );
}


function index() {
  const auth = usePage().props;
  const sortedSettings = auth.settings.sort((a, b) => {
    return a.key.localeCompare(b.order);
  });
  return (
    <div>
      <Layout title="Site Ayarları" description="Bu sayfadan sitenizin ayarlarını değiştirebilirsiniz. Buradan değiştirdiğiniz tüm ayarlar hemen aktif olur.">
        <div className="flex flex-col gap-4 w-1/2 mx-auto">
            {
              sortedSettings.map(setting =>
                (
                  <SettingSection setting={setting} key={setting.id} />
                )
                )
            }
        </div>
      </Layout>
    </div>
  );
}

export default index;
