'use client';

import { useEffect, useState, ChangeEvent } from 'react';

export default function Page() {
  const [email, setEmail] = useState('sample@email.com');
  const [password, setPassword] = useState('samplepassword0123');
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(email);
  };
  return (
    <form>
      <h1>メール送信アプリ！</h1>
      <h2>※メールを送信するだけのアプリです。</h2>

      <input name="email" type="email" />
      <input type="submit" value="リクエストを送信" />
    </form>
  );
}
