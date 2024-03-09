import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faCircle } from '@fortawesome/free-solid-svg-icons';

const SchemaOption = ({ schema, handleSelectChange, handleRemoveSchema }) => {
  return (
    <div className='schema-in'>
      <FontAwesomeIcon icon={faCircle} />
      <select value={schema.value} onChange={handleSelectChange}>
        <option value={schema.value}>{schema.label}</option>
      </select>
      <button onClick={handleRemoveSchema}><FontAwesomeIcon icon={faMinus} /></button>
    </div>
  );
};

export default SchemaOption;
