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
          />
          <ValueCard
            iconName="brain"
            heading="Memorable"
            description="Make everything easy to stay. Present the most important things first."
            color="#DB7500"
          />
          <ValueCard
            iconName="seedling"
            heading="Evolving"
            description="Make it fun. Not everything needs to be perfect the first time :)"
            color="#157F3F"
          />
        </div>
      </div>

      <style jsx>{`
        .root {
          background-color: var(--color-gray-1);
          padding: var(--spacing-m);
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
          color: var(--color-gray-9);
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
  const { iconName, heading, description, color } = props;

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
          color: var(--color-gray-9);
        }
        p {
          margin-top: var(--spacing-s);
          color: var(--color-gray-6);
        }
      `}</style>
    </>
  );
}
