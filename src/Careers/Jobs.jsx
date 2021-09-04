import React from 'react';

const Jobs = ()=>{

    let id = 800;


    const jobs = [
        'Havaldar',
        'Delivery_boy',
        'Watchman',
        'Chef',
        'WebDeveloper',
        'SoftwareDeveloper',
        'Waiter',
        'Gaytonde'
    ];

    const regions = [
        'Maharashatra',
        'Gujrat',
        'Madhy Pradesh',
        'Tamilnadu',
        'Rajastan',
        'Goa'
    ];

    const table_rows = [
        {
            title : 'Account Management Executive -Sales - Immediate Starter (Kedah+Perlis)',
            location : 'Delhi',
            language : 'Hindi'
        },
        {
            title : 'Account Management Executive -Sales - Immediate Starter (Kedah+Perlis)',
            location : 'Delhi',
            language : 'Hindi'
        },
        {
            title : 'Account Management Executive -Sales - Immediate Starter (Kedah+Perlis)',
            location : 'Delhi',
            language : 'Hindi'
        },
        {
            title : 'Account Management Executive -Sales - Immediate Starter (Kedah+Perlis)',
            location : 'Delhi',
            language : 'Hindi'
        },
        {
            title : 'Account Management Executive -Sales - Immediate Starter (Kedah+Perlis)',
            location : 'Delhi',
            language : 'Hindi'
        },
        {
            title : 'Account Management Executive -Sales - Immediate Starter (Kedah+Perlis)',
            location : 'Delhi',
            language : 'Hindi'
        },
        {
            title : 'Account Management Executive -Sales - Immediate Starter (Kedah+Perlis)',
            location : 'Delhi',
            language : 'Hindi'
        },
        {
            title : 'Account Management Executive -Sales - Immediate Starter (Kedah+Perlis)',
            location : 'Delhi',
            language : 'Hindi'
        },
        {
            title : 'Account Management Executive -Sales - Immediate Starter (Kedah+Perlis)',
            location : 'Delhi',
            language : 'Hindi'
        },
        {
            title : 'Account Management Executive -Sales - Immediate Starter (Kedah+Perlis)',
            location : 'Delhi',
            language : 'Hindi'
        },
    ];


    return (
        <>
        <div id="filters">
            <p>
            show <select name="entries" id="entries">
                <option value="10">10</option>
                <option value="10">25</option>
                <option value="10">50</option>
                <option value="10">100</option>
            </select> entries
            </p>
            <p>
                search <input type="text" name="search" id="search" autoComplete="off"/>
            </p>
        </div>

        <table id="table_of_jobs">
            <tr>
                <th className="col_1">Job title</th>
                <th className="col_2">
                    <select name="job_post" id="job_post">
                        <option value="All" selected>All</option>
                        {
                            jobs.map((job_post)=>{
                                return <option key={id++} value={job_post}>{job_post}</option>
                            })
                        }
                    </select>
                </th>
                <th className="col_3">
                    <select name="state" id="state">
                        <option value="All" selected>All</option>
                        {
                            regions.map((region)=>{
                            return <option key={id++} value={region}>{region}</option>
                            })
                        }
                    </select>
                </th>
            </tr>
            {
                    table_rows.map((row,index)=>{
                        let class_name_1 = (index+1)%2===0?'rows bg_eveb':'rows bg_odd';
                        let class_name_2 = index===9?'last':'';
                        let name_of_class = class_name_1 + class_name_2
                        return <tr className={name_of_class} key={id++}>
                            <td className="col_1" ><a href="/">{row.title}</a></td>
                            <td className="col_2">{row.language}</td>
                            <td className="col_3">{row.location}</td>
                        </tr>
                    })
            }
        </table>
        </>
    );
}

export default Jobs;