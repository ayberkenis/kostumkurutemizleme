import  GridItem  from "../AdminComponents/GridItem";


function Statistics( { auth } ) {
    return(
        <GridItem title="İstatistikler">
            <ul className="list-outside p-4 flex flex-col gap-4">
            <li>Toplam kayıtlı müşteri sayısı: {auth.totalUsers}</li>
            <li>Toplam randevu sayısı: {auth.totalRandezveous}</li>
            <li>Toplam ürün sayısı: {auth.totalProducts}</li>
            </ul>
        </GridItem>
    )
}

export default Statistics;