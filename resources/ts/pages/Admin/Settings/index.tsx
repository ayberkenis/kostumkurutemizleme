import React from "react";
import { usePage } from "@inertiajs/react";
import Layout from "@/layouts/Layout";

const SettingSection = ({
  title,
  defaultValue,
  inputType = "text", // Default to 'text' if not specified
  description = "",
}) => {
  const isRadioChecked = inputType === "radio" ? defaultValue === "true" : false;

  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col gap-6">
      <h2 className="font-poppins font-bold font-xl">{title}</h2>
      {inputType === "textarea" ? (
        <textarea
          className="rounded-sm border-2 hover:animate-pulse"
          defaultValue={defaultValue}
        ></textarea>
      ) : inputType === "radio" ? (
        <label>
          <input
            type="radio"
            className="mx-2 hover:animate-pulse"
            value="true"
            defaultChecked={isRadioChecked}
          />
          {isRadioChecked ? "Evet" : "Hayır"}
          <input
            type="radio"
            className="mx-2 hover:animate-pulse"
            value="false"
            defaultChecked={!isRadioChecked}
          />
          {!isRadioChecked ? "Evet" : "Hayır"}
        </label>
      ) : (
        // Default to 'text' if inputType is not recognized
        <input
          className="rounded-sm border-2 hover:animate-pulse"
          defaultValue={defaultValue}
        ></input>
      )}
      {description ? <p className="text-gray-500 text-sm">{description}</p> : null}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold my-8 rounded-sm px-4 py-2 w-1/4 mx-auto">
        Kaydet
      </button>
    </div>
  );
};

function index() {
  const auth = usePage().props;

  const settingsToRender = [
    {
      key: "site_name",
      title: "Site Adı",
      description:
        "Site adınızı buradan değiştirebilirsiniz. Sitenizin adının gözüktüğü her yerde değişiklik sağlanır.",
    },
    {
      key: "site_owner",
      title: "Site Sahibi (İsim - Soyisim)",
      description:
        "Site sahibinin ismini değiştirebilirsiniz. Bu bilginin gösterildiği herhangi bir yer yok ancak Google gibi arama motorları bu bilgiyi kullanabilir.",
    },
    {
      key: "email_address",
      title: "İletişim Email",
      description:
        "İletişim email adresinizi buradan değiştirebilirsiniz. Bu email adresi ile müşterileriniz sizinle iletişime geçebilir. Ayrıca müşterilerinize bilgilendirme mailleri bu mail adresi üzerinden gönderilir.",
    },
    {
      key: "shop_address",
      title: "Mağaza Adresi",
      description:
        "Mağazanızın adresini buradan değiştirebilirsiniz. Bu adresiniz anasayfa da görünen Google Maps görüntüsü ve bilgi için kullanılacaktır.",
    },
    {
      key: "sms_number",
      title: "İletişim No",
      description:
        "Bu numara ile müşterileriniz sizinle iletişime geçebilir. Ayrıca müşterilerinize bilgilendirme Whatsapp mesajları bu numara üzerinden gönderilir.",
    },
    {
      key: "enable_randevu",
      title: "Randevu Sistemi Aktif Mi?",
      inputType: "radio",
      description:
        "Randevu sisteminin aktif olup olmadığını buradan değiştirebilirsiniz. Randevu sistemi aktif olmadığında müşterileriniz randevu alamaz.",
    },
    {
      key: "enable_notifications",
      title: "Bildirimler Aktif Mi?",
      inputType: "radio",
      description:
        "Bildirim sisteminin aktif olup olmadığını buradan değiştirebilirsiniz. Bildirim sistemi aktif olmadığında müşterileriniz bildirim alamaz. Bu bildirimler hem Whatsapp hem mail için geçerlidir. Deaktifleştirilmesi sadece bir sorun olduğunda tavsiye edilir.",
    },
    {
      key: "enable_ratings",
      title: "Değerlendirme Sistemi Aktif Mi?",
      inputType: "radio",
      description:
        "Değerlendirme sisteminin aktif olup olmadığını buradan değiştirebilirsiniz. Değerlendirme sistemi aktif olmadığında müşterileriniz değerlendirme yapamaz. Randevu sistemi çalışmaya devam eder.",
    },
    {
      key: "show_availability_on_home_page",
      title: "Müsaitlik durumunu anasayfa da göster?",
      inputType: "radio",
      description:
        "Müsaitlik durumunu anasayfa da göstermek istiyorsanız bu ayarı aktif edebilirsiniz. Bu ayar aktif edildiğinde müşterileriniz anasayfada müsaitlik durumunu görebilir.",
    },
    {
      key: "working_hours_home",
      title: "Çalışma Saatleri (Anasayfa)",
      description:
        "Çalışma saatlerini buradan değiştirebilirsiniz. Bu saatler anasayfada en alt kısımda gösterilir.",
    },
    {
      key: "working_hours_headers",
      title: "Çalışma Saatleri (Üst Bilgi)",
      description:
        "Çalışma saatlerini buradan değiştirebilirsiniz. Bu saatler üst bilgide gösterilir.",
    },
    {
      key: "instagram_url",
      title: "Instagram URL",
      description:
        "Instagram adresinizi buradan değiştirebilirsiniz. Bu adresiniz anasayfa da görünen Instagram ikonu için kullanılacaktır.",
    },
    {
      key: "youtube_url",
      title: "YouTube URL",
      description:
        "YouTube adresinizi buradan değiştirebilirsiniz. Bu adresiniz anasayfa da görünen YouTube ikonu için kullanılacaktır.",
    },
    {
      key: "enable_registration",
      title: "Müşteriler kayıt olabilsin mi?",
      inputType: "radio",
      description:
        "Müşterilerin kayıt olup olamayacağını buradan değiştirebilirsiniz. Kayıt olma sistemi aktif olmadığında müşterileriniz kayıt olamaz. Yönetici panelinden müşterileriniz için kayıt açmanız gerekir, kaydı sizin tarafından yapılan kullanıcılar paneli kullanmaya devam edebilir.",
    },

    // Add more settings as needed
  ];

  return (
    <div>
      <Layout>
        <div className="header">
          <h1 className="font-poppins font-bold font-2xl">Site Ayarları</h1>
          <p> Bu sayfadan sitenin ayarlarını değiştirebilirsiniz. </p>
        </div>

        <div className="flex flex-col gap-4 w-1/2 mx-auto">
          {settingsToRender.map((setting) => {
            //@ts-ignore
            const foundSetting = auth.settings.find((s) => s.key === setting.key);
            if (foundSetting) {
              return (
                <SettingSection
                  key={setting.key}
                  title={setting.title}
                  defaultValue={foundSetting.value}
                  inputType={setting.inputType || "text"}
                  description={setting.description}
                />
              );
            }
            return null; // Don't render if setting not found
          })}
        </div>
      </Layout>
    </div>
  );
}

export default index;
