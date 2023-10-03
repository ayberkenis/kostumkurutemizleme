import { Link } from "@inertiajs/react";

function QuickActionLink(props) {
    <Link className="font-poppins text-lg" href={props.href}>
    {props.children}
    </Link>
}

function QuickActions(){
    return (
        <div className="flex flex-col p-8 gap-4 justify-center items-start">
            <QuickActionLink href="/admin/musteri-kayit">
                Müşteri Ekle
            </QuickActionLink>

            <Link href="/admin/randevu-ekle">
                Randevu Ekle
            </Link>

            <Link href="/admin/guncelleme">
                Panel Güncelleme Kontrolü
            </Link>

            <Link href="/admin/ayarlar">
                Ayarlar
            </Link>

            <Link href="/admin/eklentiler">
                Eklentiler
            </Link>

            <Link href="/admin/destek">
                Destek
                </Link>
        </div>
    )
}

export default QuickActions;