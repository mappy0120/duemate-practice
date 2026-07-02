// mail入力するアプリを作成

'use client';

import { useState, ChangeEvent } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert('フォームが送信されました');
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
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
