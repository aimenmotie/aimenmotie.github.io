import React from "react";
import { MdOutlineRemoveRedEye, MdArticle } from "react-icons/md";
import { motion } from "framer-motion";
import styled from "styled-components";

const Works = ({ item }) => {
  return (
    <CardWrapper
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      itemId={item.id}
      className="grid-item"
    >
      <a 
        href={item.href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="card-link-wrapper"
        style={{ display: 'block', textDecoration: 'none', color: 'inherit', width: '100%', height: '100%' }}
      >
        <div className="scholarly-card">
          <div className="card-image">
            <img src={item.imgsrc} alt={item.name} loading="lazy" />
            <div className="category-tag">{item.category}</div>
          </div>
          
          <div className="card-info">
            <h3 className="article-title">{item.fullTitle || item.name}</h3>
            
            <div className="meta-info">
              <span className="journal">{item.journal}</span>
              <span className="separator">•</span>
              <span className="year">{item.year}</span>
            </div>
            
            <p className="abstract">{item.abstract}</p>
            
            <div className="card-footer">
              <div className="view-btn">
                <MdArticle className="btn-icon" />
                View Full Paper
              </div>
            </div>
          </div>
        </div>
      </a>
    </CardWrapper>
  );
};

export default Works;

const CardWrapper = styled(motion.div)`
  width: 100%;
  
  .scholarly-card {
    background: ${({ theme }) => theme.bg.primary};
    border: 1px solid rgba(${({ theme }) => theme.title.primary}, 0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    text-align: left;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    position: relative;
    z-index: 1;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.15);
    }

    .card-image {
      position: relative;
      height: 320px;
      overflow: hidden;
      border-bottom: 2px solid ${({ theme }) => theme.highlight.primary};
      background: #f8f9fa;
      /* Subtle inset shadow to define the 'cadre' */
      box-shadow: inset 0 0 10px rgba(0,0,0,0.05);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        opacity: 1;
        transition: all 0.5s ease;
        padding: 12px;
      }

      &:hover img {
        transform: scale(1.02);
      }

      .category-tag {
        position: absolute;
        /* Moved to bottom-left to avoid covering infographic headers */
        bottom: 10px;
        left: 10px;
        background: ${({ theme }) => theme.highlight.primary};
        color: #fff;
        padding: 5px 12px;
        border-radius: 4px;
        font-size: 0.65rem;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 1px;
        z-index: 2;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }
    }

    .card-info {
      padding: 25px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      background: inherit;

      .article-title {
        font-size: 1.15rem;
        font-weight: 800;
        line-height: 1.4;
        margin: 0 0 12px 0;
        color: rgb(${({ theme }) => theme.title.primary});
        /* Ensure visibility */
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      }

      .meta-info {
        font-size: 0.85rem;
        color: rgb(${({ theme }) => theme.title.secondary});
        margin-bottom: 18px;
        font-style: italic;
        display: flex;
        align-items: center;
        opacity: 0.9;

        .separator {
          margin: 0 10px;
          opacity: 0.4;
        }
      }

      .abstract {
        font-size: 0.9rem;
        line-height: 1.6;
        color: rgb(${({ theme }) => theme.title.primary});
        opacity: 0.8;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 25px;
      }

      .card-footer {
        margin-top: auto;
        padding-top: 15px;
        border-top: 1px solid rgba(${({ theme }) => theme.title.primary}, 0.05);
        
        .view-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 12px 22px;
          background: ${({ theme }) => theme.highlight.primary};
          border: none;
          color: #fff;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(${({ theme }) => theme.highlight.rgb.primary}, 0.25);

          .btn-icon {
            margin-right: 12px;
            font-size: 1.3rem;
          }

          &:hover {
            transform: translateY(-2px);
            filter: brightness(1.15);
            box-shadow: 0 6px 20px rgba(${({ theme }) => theme.highlight.rgb.primary}, 0.35);
          }

          &:active {
            transform: translateY(0);
          }
        }
      }
    }
  }
`;
