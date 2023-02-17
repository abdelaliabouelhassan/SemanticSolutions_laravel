<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Semanti</title>
    @vite('resources/css/app.css')
</head>
<body>
    <div id="app" class=" w-full bg-white md:bg-tertiary">
        <app-header></app-header>
        <div class="w-full h-full">
            @yield('content')
        </div>
        <app-footer />
    </div>
    @vite(['resources/js/app.js'])
</body>
</html>

