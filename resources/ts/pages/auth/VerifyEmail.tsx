import { Link, useForm } from "@inertiajs/react";
import React, { FormEvent } from "react";

interface Props {
  status?: string;
}

function VerifyEmail({ status }: Props) {
  const { post, processing } = useForm({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post("/email/verification-notification");
  };

  return (
    <div>
      <div className="p-8">
      <Link href="/" className="p-4 text-xl font-bold text-white bg-black font-poppins tracking-widest">
              Kostüm Kuru Temizleme
            </Link>
      </div>

      <div className="max-w-xl p-4 mx-auto">
        <h1 className="text-3xl text-center">E-Mail Onayı</h1>
        <p className="mt-4 text-center">
        Başlamadan önce, size yeni gönderdiğimiz bağlantıyı tıklayarak e-posta adresinizi doğrulayabilir misiniz? E-postayı almadıysanız, memnuniyetle başka bir tane göndeririz.
        </p>

        {status === "verification-link-sent" && (
          <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
Kayıt sırasında sağladığınız e-posta adresine yeni bir doğrulama bağlantısı gönderildi.
          </div>
        )}

        <form className="flex flex-col pt-3 md:mt-8" onSubmit={handleSubmit}>
          <input
            type="submit"
            value="Send Verification Email"
            className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700"
            disabled={processing}
          />

          <Link href="/logout" method="post" as="button" className="mt-4 underline cursor-pointer">
            Çıkış Yap
          </Link>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
