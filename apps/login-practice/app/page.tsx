'use client';

import { useState, ChangeEvent } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form>
      <h1>メール送信アプリ！</h1>
      <h2>※メールを送信するだけのアプリです。</h2>

      <input
        name="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <input type="submit" value="リクエストを送信" />
    </form>
  );
}
