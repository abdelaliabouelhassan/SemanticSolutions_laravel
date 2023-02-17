<x-mail::message>
<span>New Contact</span>

<p>Name: {{ $name }}</p>
<p>Email: {{ $email }}</p>
<p>Phone: {{ $phone }}</p>
<p>Message: {{ $message }}</p>


Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
