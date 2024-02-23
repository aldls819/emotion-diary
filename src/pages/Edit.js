import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParmas, setSearchParams] = useSearchParams();
  const id = searchParmas.get("id");
  const mode = searchParmas.get("mode");

  const navigate = useNavigate();

  return (
    <div>
      <h1>여기는 Edit</h1>
      <button onClick={() => navigate("/home")}>홈으로</button>
    </div>
  );
};

export default Edit;
