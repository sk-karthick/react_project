import React, { useState } from 'react';
import './App.css';
import { IoIosArrowBack } from 'react-icons/io';
import Sidebar from './components/Sidebar';
import SchemaOption from './components/SchemaOption';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchema, setSelectedSchema] = useState([
    { label: 'First Name', value: 'first_name' },
    { label: 'Account Name', value: 'account_name' }
  ]);
  const [newSchemaIndex, setNewSchemaIndex] = useState(2); 

  const schemaOptions = [
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleAddSchema = () => {
    let newSchema = null;
    if (newSchemaIndex < schemaOptions.length + 2) {
      newSchema = schemaOptions[newSchemaIndex - 2];
      if (!selectedSchema.some(schema => schema.label === newSchema.label)) {
        setSelectedSchema([...selectedSchema, newSchema]);
      }
      setNewSchemaIndex(newSchemaIndex + 1);
    }
  };

  const handleRemoveSchema = (index) => {
    const updatedSchema = selectedSchema.filter((schema, i) => i !== index);
    setSelectedSchema(updatedSchema);
  };

  const handleSaveSegment = () => {
    const formattedSchema = selectedSchema.map(schema => ({ [schema.value]: schema.label }));

    const segment = {
      segment_name: segmentName,
      schema: formattedSchema
    };

    console.log(segment);

    toggleSidebar();
  };

  const handleCancel = () => {
    setSegmentName('');
    setSelectedSchema([
      { label: 'First Name', value: 'first_name' },
      { label: 'Account Name', value: 'account_name' }
    ]);
    setNewSchemaIndex(2);
    toggleSidebar();
  };

  const handleSelectChange = (e, index) => {
    const updatedSchema = [...selectedSchema];
    updatedSchema[index].value = e.target.value;
    setSelectedSchema(updatedSchema);
  };

  return (
    <div className='main-page'>
      <h1><IoIosArrowBack size={30} /> View Audience</h1>
      <div className='main-blur'></div>
      <div className='main-page-inner'>
        <button onClick={toggleSidebar} className='save-segment-button'>
          Save segment
        </button>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          segmentName={segmentName}
          setSegmentName={setSegmentName}
          selectedSchema={selectedSchema}
          handleAddSchema={handleAddSchema}
          handleRemoveSchema={handleRemoveSchema}
          handleSaveSegment={handleSaveSegment}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default App;
