import React from 'react';
import SchemaOption from './SchemaOption';
import { IoIosArrowBack } from 'react-icons/io';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
const Sidebar = ({
    isSidebarOpen,
    segmentName,
    setSegmentName,
    selectedSchema,
    handleAddSchema,
    handleRemoveSchema,
    handleSaveSegment,
    handleCancel,
    handleSelectChange
}) => {
    return (
        isSidebarOpen && (
            <div className="sidebar">
                <div className='sidebar-head'><h1><IoIosArrowBack size={30} /> Saving  Segment</h1></div>
                <div className='sidebar-cont'>
                    <div className='schema-cont'>
                        <div>
                            <p>Enter the Name of Segment</p>
                            <input
                                type="text"
                                placeholder="Segment name"
                                value={segmentName}
                                onChange={(e) => setSegmentName(e.target.value)}
                            />
                            <p>To save your segment, you need to add the schemas to build the query</p>
                        </div>
                        <div className='announce-color'>
                            <p> <FontAwesomeIcon icon={faCircle} />- User Traits</p>
                            <p> <FontAwesomeIcon icon={faCircle} />- Group Traits</p>
                        </div>
                        <div className="blue-box">
                            {selectedSchema && selectedSchema.map((schema, index) => (
                                <SchemaOption
                                    key={index}
                                    schema={schema}
                                    handleRemoveSchema={() => handleRemoveSchema(index)}
                                    handleSelectChange={(e) => handleSelectChange(e, index)} 
                                />
                            ))}
                            <button onClick={handleAddSchema} className='add-schema'>+ Add new schema</button>
                        </div>

                    </div>
                    <div className='sidebar-save'>
                        <button onClick={handleSaveSegment}>Save the Segment</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    );
};


export default Sidebar;
