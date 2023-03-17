import React, { useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import PostView from "./components/postview";
import { AdCoTeStyle } from "./mainstyle";

// 메인화면
const AdContentsHome = () => {
  const [inContents, setInContents] = useState({
    con_title: "",
    con_contents: "",
  });

  const [isList, setIsList] = useState(listContents);

  const [isId, setIsId] = useState(0);

  const { con_title, con_contents } = inContents;

  const textarea = useRef();
  const handleResizeHeight = (e) => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";

    const { name, value } = e.target;
    setInContents({
      ...inContents,
      [name]: value,
    });
  };

  const titleChange = (e) => {
    const { name, value } = e.target;
    setInContents({
      ...inContents,
      [name]: value,
    });
  };

  const addId = useRef(listContents.length + 1);
  const createContents = () => {
    const addcon = {
      id: addId.current,
      con_title,
      con_contents,
    };
    setIsList(isList.concat(addcon));

    setInContents({
      con_title: "",
      con_contents: "",
    });

    addId.current += 1;
  };

  const removeCon = (id) => {
    setIsList(isList.filter((v) => v.id !== id));
  };

  console.log(isList);
  return (
    <AdCoTeStyle>
      <h1 className="title">게시판 글 작성목록 만들기</h1>
      <div className="input-contain">
        <input type="text" placeholder="제목" className="in-title" name="con_title" onChange={titleChange} />
        <textarea type="text" placeholder="글 작성란" className="text-area" name="con_contents" ref={textarea} onChange={handleResizeHeight} row={1} />
        <p>
          <button className="submit" onClick={createContents}>
            작성 완료
          </button>
        </p>
      </div>

      <div className="con-contain">
        <h1>게시판</h1>
        {isList.map((v) => {
          return <CreateList id={v.id} contitle={v.con_title} key={v.id} remove={removeCon} isId={setIsId} />;
        })}
      </div>
      <Routes>
        <Route path={`post/${isId}`} element={<PostView id={isId} />} />
      </Routes>
    </AdCoTeStyle>
  );
};

export default AdContentsHome;

const CreateList = ({ id, contitle, remove, isId }) => {
  return (
    <div className="list-wrap">
      <div className="list-box">
        <Link to={`post/${id}`} onClick={() => isId(id)}>
          <h3 className="li-title">{contitle}</h3>
        </Link>
      </div>
      <div className="dabt-box">
        <p>date</p>
        <button onClick={() => remove(id)}>삭제</button>
      </div>
    </div>
  );
};

const listContents = [];
