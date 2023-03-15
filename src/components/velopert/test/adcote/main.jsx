import React, { useRef, useState } from "react";
import { AdCoTeStyle } from "./mainstyle";

// 메인화면
const AdContentsHome = () => {
  const [inContents, setInContents] = useState({
    con_title: "",
    con_contents: "",
  });

  const [isList, setIsList] = useState(listContents);

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
          return (
            <div className="list-wrap" key={v.id}>
              <div className="list-box">
                <p className="li-num">No. {v.id}</p>
                <h3 className="li-title">{v.con_title}</h3>
              </div>
              <div className="dabt-box">
                <p>date</p>
                <button>삭제</button>
              </div>
            </div>
          );
        })}
      </div>
    </AdCoTeStyle>
  );
};

export default AdContentsHome;

const listContents = [{ id: 1, con_title: "기본", con_contents: "기본적인 것입니다" }];
