import { useState } from "react";

interface User {
  name: string;
  email: string;
  password: string;
}

export const CounterFuncUpdate = () => {
  // const [name, setname] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");

  const [user, setUser] = useState<User | null>(null);

  setUser(prev => {
    ...prev, name: "EFIM"
  })

  // const [value, setValue] = useState<number>(0);

  const incrementX2 = () => {
    // Function update (Функциональное обноваление)
    // setValue((prev) => prev + 1);
    // setValue((prev) => prev + 1);
    // Direction update (Прямое обновление) и оно не сработает :(
    // Потому что они оба обращаются к старому значению
    // setValue(value + 1); // 1
    // setValue(value + 1); // 2
  };
  return (
    <div>
      <h4>Counter {value}</h4>

      <button onClick={incrementX2}>increment</button>
    </div>
  );
};
