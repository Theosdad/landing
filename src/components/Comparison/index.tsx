import React, { useState } from "react";
import clsx from "clsx";

import "./index.scss";

interface ComparisonProps {
  title?: string;
  leftTitle?: string;
  rightTitle: string;
  leftItems?: string[];
  rightItems: string[];
  leftKey?: string;
  rightKey?: string;
}

export default function Comparison({
  title,
  leftTitle,
  rightTitle,
  leftItems,
  rightItems,
  leftKey = "left",
  rightKey = "right",
}: ComparisonProps) {
  const hasLeftOptions = leftTitle && leftItems;
  const [activeComparison, setActiveComparison] = useState<string>(
    hasLeftOptions ? leftKey : rightKey
  );

  return (
    <section className="comparison">
      {title && <h2>{title}</h2>}
      {hasLeftOptions && (
        <div className="comparison__buttons">
          <button
            className={clsx("comparison__button", {
              active: activeComparison === leftKey,
            })}
            onClick={() => setActiveComparison(leftKey)}
          >
            {leftTitle}
          </button>
          <button
            className={clsx("comparison__button", {
              active: activeComparison === rightKey,
            })}
            onClick={() => setActiveComparison(rightKey)}
          >
            {rightTitle}
          </button>
        </div>
      )}
      <div className="comparison__wrapper">
        {hasLeftOptions && (
          <div
            className={clsx("comparison__subject", leftKey, {
              active: activeComparison === leftKey,
            })}
          >
            <h3>{leftTitle}</h3>
            <ul className="comparison__list list-reset">
              {leftItems.map((item, index) => (
                <li key={index} className={`comparison__item ${leftKey}__item`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div
          className={clsx("comparison__subject", rightKey, {
            active: activeComparison === rightKey,
          })}
        >
          <h3>{rightTitle}</h3>
          <ul className="comparison__list list-reset">
            {rightItems.map((item, index) => (
              <li key={index} className={`comparison__item ${rightKey}__item`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
