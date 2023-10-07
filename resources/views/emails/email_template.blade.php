<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body style="font-family: 'Poppins', sans-serif;" class="w-1/2">
    <h1 style="font-size: 1.5rem;">Merhaba, {{ $name }} {{ $surname }}</h1>
    <p style="font-size: 1rem; font-weight: 400;">Mesajınız bize ulaşmıştır, konuyla ilgili bizimle paylaştığınız mail adresine geri dönüş sağlanacaktır.</p>
    <p style="margin: 2rem; padding: 2rem; background-color: #fff; font-size: 0.6rem; width: 50%; border: #2f2f2f 2px solid;">{{ $messages }}</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr;">
        <a href="https://kostumkurutemizleme.com.tr">Kostüm Kuru Temizleme</a>
        <p>Bizi tercih ettiğiniz için teşekkür ederiz.</p>
    </div>
</body>
</html>
