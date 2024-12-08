import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  './StudentDetails.css';

const StudentDetails = ({ studentId }) => {
    const [student, setStudent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudent = async () => {
            try{
                const response = await fetch(`http://127.0.0.1:8000/get_student_by_id/${studentId}`);
                if(!response.ok){
                    throw new Error("Failed to fetch student data");
                }
                const data = await response.json();
                //const data = response;
                setStudent(data)
                console.log(data)
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }
        };
        fetchStudent();
    }, [studentId]);
    
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;

    return(
        <div>
            {student ? (
                <div className='container StudentDetails'>
                    <h2>Student Details</h2><hr />
                    <p className='par'><strong>ID:</strong> {student.student_id}</p>
                    <p className='par'><strong>Name:</strong> {student.student_name}</p>
                    <p className='par'><strong>Age:</strong> {student.student_age}</p>
                    <p className='par'><strong>Major:</strong> {student.student_major}</p>
                    <p className='par'><strong>Grade:</strong> {student.student_grade}</p>
                    <p className='par'><strong>Year Of Study:</strong> {student.year_of_study}</p>
                    
                </div>
            ) : (
                <p>No student found</p>
            )}
        </div>
    );
};

export default StudentDetails;