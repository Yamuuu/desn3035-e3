import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.css";

const supabase = createClient("https://tetbvxipdrusfngasmkq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRldGJ2eGlwZHJ1c2ZuZ2FzbWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1OTI4NDAsImV4cCI6MjA0MjE2ODg0MH0.hqHenrwtEYLjsUIRBZnYPp_a0Lqzi2AubEE_N5X79dg");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;