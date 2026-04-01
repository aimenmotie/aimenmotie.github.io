import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { ProjImg } from "../Config/Config";
import { AnimatePresence, motion } from "framer-motion";
import Works from "../Components/Works";

const Portfolio = () => {
  const [isActive, SetIsActive] = useState("all")
  const [items, setitems] = useState([]);
  const [collection, setCollection] = useState([]);

  const sortItem = (Items) =>{
    const result = Items.sort(function (a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    return result;
  }

  const filterItem = (categItem) => {
      SetIsActive(categItem)
      const updatedItems = ProjImg.filter((curElem) => {
        return curElem.category === categItem;
      });
      const result = sortItem(updatedItems)
      setitems(result);
    
  };

  console.log(isActive)

  useEffect(()=>{
     setitems(ProjImg);
     setCollection([...new Set(ProjImg.map((item)=>item.category))])
  }, [])

  return (
    <Wrapper>
      <div className="card-inner p-section">
        <div className="card-wrap">
          <div className="content work">
            <div className="title" data-aos="fade-up">
              <span className="first-word">Recent </span>
              Works
            </div>
          </div>
          <div className={`p-btns`} data-aos="fade-up">
            
            <button
              className={`btn p-btn ${isActive === "all" ? "active" : ""}`}
              data-btn-num="2"
              onClick={() => {
                setitems(ProjImg)
                SetIsActive("all")
                } }
            >
              All
            </button>
          {
            collection.map((item)=>{
              return (
                <button
                key={item}
                className={`btn p-btn ${isActive === item ? "active" : ""}`}
                data-btn-num="2"
                onClick={() => filterItem(item)}
            >
              {item}
            </button>
              )
            })
          }
           
          </div>
          <motion.div layout className="grid-items">
            <AnimatePresence>
              {items &&
                items.map((item) => <Works key={item.id} item={item} />)}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.section`

  .card-wrap {
    overflow: hidden;
    padding-bottom: 30px;
  }
  .content {
    margin: 0px 0px 10px;
  }
  .box-item .image .info:before {
    background: linear-gradient(
      135deg,
      rgba(120, 204, 109, 0.5) 0%,
      rgba(120, 204, 109, 0.01) 100%
    );
  }

  .box-item .image .info:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
  }

  .p-section .grid-items {
    position: relative;
    display: grid;
    padding: 20px 0;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 2.5rem;
    margin: 0;
    overflow: visible;

    .grid-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: stretch;
      padding: 0;
      min-height: 480px;
    }
  }
  .p-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }

  .p-btn {
    width: auto;
    border: none;
    margin-right: 1rem;
    padding: 0;
    height: 100%;
    border-radius: 0;
    color: rgb(${({ theme }) => theme.title.primary});
    border-bottom: 1px solid transparent;
    text-transform: capitalize
  }
  .p-btn.active {
    border-bottom: 1px solid ${({ theme }) => theme.highlight.primary};
    color: ${({ theme }) => theme.highlight.primary};
  }
  .p-btn:hover,
  .p-btn:focus {
    border-radius: 0;
    border-bottom: 1px solid ${({ theme }) => theme.highlight.primary};
    box-shadow: none !important;
    color: ${({ theme }) => theme.highlight.primary};
  }
`;
