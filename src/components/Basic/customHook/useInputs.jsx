import { useCallback, useState } from "react";

function UseInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

export default UseInputs;
