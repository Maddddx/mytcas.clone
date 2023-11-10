import React from 'react'
import './Intro.css'

function Intro() {
    return (
        <div className='intro'>
            <div className='Banner'>
                <div className='title'>
                    <img src='https://www.mytcas.com/img/logo.svg' width='160' height='60' className='banner-logo'></img>
                    <h1>
                        <span className='en-text'>Thai University Central Admission System Clone</span>
                        <span className='th-text'>ระบบการคัดเลือกกลางบุคคลเข้าศึกษาในสถาบันอุดมศึกษา</span>
                    </h1>
                    <a href="https://student.mytcas.com/" className='reges-botton'>
                        <span>สมัครลงทะเบียน - เข้าสู้ระบบ TCAS67</span>
                    </a>
                    <p>เปิดระบบลงทะเบียน TCAS67 วันที่ 28 ตุลาคม 2566</p>
                </div>

                <div className='sub-Banner'>
                    <img src='https://www.mytcas.com/img/hero.webp' width={480} height={400}></img>
                </div>
            </div>

            <div className='search-box'>   
            <h2>ค้นหาข้อมูลหลักสูตรที่ต้องการศึกษา</h2>
            
            <div className='input-search'>
                <input id='search' type='text' placeholder='พิมพ์ชื่อสถาบัน คณะ หรือหลักสูตร'></input>
            </div>

            <a href='/'>
                <i className='uni-svg'>
                    <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='70px' height='30px' viewBox='0 0 48 48'>
                        <path d='M 24 4 C 23.731 4 23.462156 4.0717969 23.222656 4.2167969 L 9.6132812 12.466797 C 7.2492813 13.898797 6 15.984 6 18.5 C 6 19.329 6.672 20 7.5 20 L 40.5 20 C 41.328 20 42 19.329 42 18.5 C 42 15.984 40.750719 13.898797 38.386719 12.466797 L 24.777344 4.2167969 C 24.537844 4.0717969 24.269 4 24 4 z M 24 11 C 25.105 11 26 11.895 26 13 C 26 14.105 25.105 15 24 15 C 22.895 15 22 14.105 22 13 C 22 11.895 22.895 11 24 11 z M 11.476562 21.978516 A 1.50015 1.50015 0 0 0 10 23.5 L 10 36.5 A 1.50015 1.50015 0 0 0 11.5 38 L 36.5 38 A 1.50015 1.50015 0 0 0 38 36.5 L 38 23.5 A 1.50015 1.50015 0 1 0 35 23.5 L 35 35 L 33 35 L 33 23.5 A 1.50015 1.50015 0 1 0 30 23.5 L 30 35 L 28 35 L 28 23.5 A 1.50015 1.50015 0 1 0 25 23.5 L 25 35 L 23 35 L 23 23.5 A 1.50015 1.50015 0 1 0 20 23.5 L 20 35 L 18 35 L 18 23.5 A 1.50015 1.50015 0 1 0 15 23.5 L 15 35 L 13 35 L 13 23.5 A 1.50015 1.50015 0 0 0 11.476562 21.978516 z M 7.5 40 A 1.50015 1.50015 0 1 0 7.5 43 L 40.5 43 A 1.50015 1.50015 0 1 0 40.5 40 L 7.5 40 z' fill='currentColor'></path>
                    </svg>
                </i>
                รายชื่อสถาบัน
            </a>
        </div>
        </div>
    )
}

export default Intro