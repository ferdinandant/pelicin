import { Icon } from '@pelicin/components';
import { ReactNode } from 'react';

// ================================================================================
// TYPES/CONST
// ================================================================================

type ValueCardProps = {
  iconName: string;
  heading: string;
  description: string;
  color: string;
  textColor: string;
};

// ================================================================================
// MAIN
// ================================================================================

export default function Values() {
  return (
    <>
      <div className="root">
        <div className="content titleRow">
          <h2>Core values (that I wish to achieve)</h2>
        </div>
        <div className="content valuesRow">
          <ValueCard
            iconName="ruler"
            heading="Concise"
            description="Keep things simple. Try to elaborate complex stuffs in an elegant way."
            color="#E01F1F"
            textColor="#8A1919"
          />
          <ValueCard
            iconName="brain"
            heading="Memorable"
            description="Make everything easy to stay. Present the most important things first."
            color="#DB7500"
            textColor="#883E01"
          />
          <ValueCard
            iconName="seedling"
            heading="Evolving"
            description="Make it fun. Not everything needs to be perfect the first time :)"
            color="#157F3F"
            textColor="#0F4D29"
          />
        </div>
      </div>

      <style jsx>{`
        /* https://www.heropatterns.com/ */
        .root {
          padding: var(--spacing-m);
          background-color: #e4e7eb;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23cbd2d9' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
          border-top: 4px solid var(--color-gray-2);
          border-bottom: 4px solid var(--color-gray-2);
        }
        .content {
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Title row */
        .titleRow {
          margin-top: var(--spacing-m);
          margin-bottom: var(--spacing-l);
          text-align: center;
        }
        .titleRow h2 {
          font-weight: 600;
          font-size: var(--font-size-title-2);
          color: var(--color-gray-8);
        }
        .titleRow h2::before {
          content: '— ';
        }
        .titleRow h2::after {
          content: ' —';
        }

        /* Values row */
        .valuesRow {
          display: flex;
          flex-direction: row;
          margin-bottom: var(--spacing-l);
          align-items: stretch;
        }
      `}</style>
    </>
  );
}

// ================================================================================
// CHILDREN
// ================================================================================

function ValueCard(props: ValueCardProps) {
  const { iconName, heading, description, color, textColor } = props;

  return (
    <>
      <div className="column">
        <div className="iconContainer">
          <Icon name={iconName} style={{ fontSize: 40, color }} />
        </div>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>

      <style jsx>{`
        .column {
          flex-basis: 0;
          flex-grow: 1;
          text-align: center;
          padding: var(--spacing-l) var(--spacing-m);
          background-color: var(--color-gray-0);
          margin: 0 var(--spacing-m);
          border-radius: var(--border-radius-normal);
          box-shadow: 0 var(--spacing-s) var(--spacing-xl) var(--color-gray-2);
          border-top: 4px solid ${color};
        }
        .iconContainer {
          margin-left: auto;
          margin-right: auto;
          background-color: var(--color-gray-0);
          border-radius: var(--border-radius-rounded);
          box-shadow: 0 var(--spacing-s) var(--spacing-l) var(--color-gray-1);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
        }
        h3 {
          margin-top: var(--spacing-m);
          font-weight: 600;
          font-size: var(--font-size-title-3);
          color: ${textColor || color};
        }
        p {
          margin-top: var(--spacing-s);
          color: var(--color-gray-6);
        }
      `}</style>
    </>
  );
}
