import React, { useState } from "react";
import LicenseCard from "@site/src/components/LicenseCard";
import "./styles.scss";

interface ItemData {
  title: string;
  number?: string;
}

interface LicenseItem {
  title?: string;
  year?: number;
  institution?: string;
  description?: string;
  number?: string;
  items?: ItemData[];
}

interface LicenseSection {
  title: string;
  type: string;
  contents: LicenseItem[];
}

interface LicensesListProps {
  data: LicenseSection[];
}

export default function LicensesList({ data }: LicensesListProps) {
  const [activeSection, setActiveSection] = useState(0);

  const groupByYear = (contents: LicenseItem[]) => {
    const grouped: { [key: number]: any[] } = {};
    
    contents.forEach((item) => {
      const year = item.year;
      if (year) {
        if (!grouped[year]) {
          grouped[year] = [];
        }
        
        if (item.items && item.items.length > 0) {
          item.items.forEach((subItem) => {
            grouped[year].push({
              title: subItem.title,
              number: subItem.number,
              year: year,
              showIcon: true
            });
          });
        } else {
          grouped[year].push({
            ...item,
            showIcon: false
          });
        }
      }
    });

    return Object.entries(grouped)
      .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
      .map(([year, items]) => ({ year: Number(year), items }));
  };

  return (
    <div className="licenses-list">
      <aside className="licenses-sidebar">
        <nav className="licenses-sidebar__nav">
          {data.map((section, index) => (
            <button
              key={index}
              className={`licenses-sidebar__button ${
                activeSection === index ? "licenses-sidebar__button--active" : ""
              }`}
              onClick={() => setActiveSection(index)}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      <div className="licenses-content">  
        <div className="licenses-content__sections">
          {groupByYear(data[activeSection].contents).map(({ year, items }) => (
            <div key={year} className="licenses-year-section">
              <h2 className="licenses-year-section__year">{year}</h2>
              <div className="licenses-year-section__items">
                {items.map((item, index) => (
                  <LicenseCard key={index} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
