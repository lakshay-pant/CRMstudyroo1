import React,{useEffect} from 'react';
import { useDispatch } from "react-redux";
import "./allStud.style.css";
import { useSelector } from "react-redux";
import {fetchAllStudents} from "../../pages/allStudents/allStudentAction"

export const VisaGranted = () => {

    const dispatch = useDispatch();
  const { students } = useSelector(
    (state) => state.allStudent
  );
  useEffect(() => {
    if (!students.length) {
      dispatch(fetchAllStudents());
    }
  }, [students, dispatch]);

  const visaGranted =  students.filter(function(student) {
    return student.salesStatus === "Visa Granted";
});
    return (
        <div class="col-md-4 col-12">
        <div class="data-block">
            <div class="data-heading">
                <p class="head">Visa Granted</p>
                <p><span>{visaGranted.length} students</span></p>
            </div>
            <div class="data-content">

        {visaGranted.length?(visaGranted.reverse().map((row)=>(
              <div class="data-con-box" key={row._id}>
              <div class="data-wrap">
                  <div class="data-img">
                      <img src="images/stu.png" class="img-fluid" alt="student" />
                  </div>
                  <div class="data-text">
                      <p>{row.firstName}</p>
                      <div class="contact">
                          <p>{row.onShorePhone}</p>
                          <p>{row.email}</p>
                      </div>
                  </div>
                  <div class="st-number">
                          <p>STU{row._id}</p>
                  </div>
              </div>
              <div class="post-time">
                      <p><i class="fas fa-calendar-alt"></i>Last Contacted 3 Days Ago</p>
              </div>
              </div>

        ))

        ):(
        <div class="no-data">
        <p>No Students Found</p>
        </div>
    )}



            </div>
        </div>
    </div>
    )
}