import  GridItem  from "../AdminComponents/GridItem";

function todaysRandezvous(randezveous) {
    const today = new Date();
    const randezvousDate = new Date(randezveous.date);
    return (
      randezvousDate.getDate() === today.getDate() &&
      randezvousDate.getMonth() === today.getMonth() &&
      randezvousDate.getFullYear() === today.getFullYear()
    );
  }
  

function TodaysAppointments( { auth } ) {
    return(
        <GridItem title="Bugünkü Randevular">
        {todaysRandezvous(auth.randezveous).length > 0 ? (
            <>
              <p className="font-poppins italic mb-2">
                Bugün toplam {auth.randezveous.filter((randezvous) => todaysRandezvous(randezvous)).length} randevu bulunuyor.
              </p>
              <table className="table border border-black font-poppins">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border border-zinc-700">Müşteri</th>
                    <th className="px-4 py-2 border border-zinc-700">Tarih</th>
                    <th className="px-4 py-2 border border-zinc-700">Saat</th>
                    <th className="px-4 py-2 border border-zinc-700">Durum</th>
                    <th className="px-4 py-2 border border-zinc-700">Ürünler</th>
                  </tr>
                </thead>
                <tbody>
                  {auth.randezveous
                    .filter((randezvous) => todaysRandezvous(randezvous))
                    .map((randezvous: any) => (
                      <tr className="text-center" key={randezvous.id}>
                        <td className="border border-zinc-700 w-[12rem]">{randezvous.user.name}</td>
                        <td className="border border-zinc-700 w-[8rem]">
                          {new Date(randezvous.date).toLocaleDateString('tr-TR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}{' '}
                          {new Date(randezvous.date).toLocaleDateString('tr-TR', { weekday: 'long' })}
                        </td>
                        <td className="border border-zinc-700 w-[4rem]">{randezvous.hour}</td>
                        <td className="border border-zinc-700 w-[8rem]">
                          {randezvous.status ? randezvous.status : 'Ayarlanmadı'}
                        </td>
                        <td className="border border-zinc-700 w-[24rem]">{JSON.parse(randezvous.products)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </>
          ) : (
            <p className="font-poppins italic p-4">Bugün hiç randevu bulunmuyor.</p>
          )}
          </GridItem>
    )
}

export default TodaysAppointments;