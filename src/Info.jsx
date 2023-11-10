import React from 'react'
import './Info.css'

function Info() {
  return (
    <div className='Info'>
      <div className='event'>
        <h2 className='e-title'>ปฏิทิน TCAS67</h2>
        <h3>รายละเอียดกำหนดการในแต่ละรอบ</h3>
        <div className='e-round'>
          <table>
            <thead>
              <tr>
                <th>รอบ</th>
                <th>รูปเเบบ</th>
                <th>รับสมัคร</th>
                <th>ประกาศผลในระบบ</th>
                <th>ยืนยันสิทธิ์</th>
                <th>สละสิทธิ์</th>
              </tr>
            </thead>

            <tbody>
              <tr className='round-1'>
                <td className='c1'>1</td>
                <td className='c2'>Portfolio</td>
                <td className='c3'>มหาวิทยาลัยกำหนด</td>
                <td className='c4'>
                  <div>6 Feb 24</div>
                </td>
                <td className='c5'>
                  <div>6-7 Feb 24</div>
                </td>
                <td className='c6'>
                  8 Feb 24
                  <br></br>
                  or 4 พ.ค.67
                </td>
              </tr>

              <tr className='round-2'>
                <td className='c1'>2</td>
                <td className='c2'>Quota</td>
                <td className='c3'>มหาวิทยาลัยกำหนด</td>
                <td className='c4'>
                  <div>2 พ.ค. 67</div>
                </td>
                <td className='c5'>
                  <div>2-3 พ.ค. 67</div>
                </td>
                <td className='c6'>
                  4 พ.ค. 67
                </td>
              </tr>

              <tr className='round-3'>
                <td className='c1'>3</td>
                <td className='c2'>Admission</td>
                <td className='c3'>ระบบ mytcas.com <br></br> 6-12 พ.ค. 67</td>
                <td className='c4'>
                  <div>รอบเเรก : 20 พ.ค. 67 <br></br>รอบสอง : 25 พ.ค.67</div>
                </td>
                <td className='c5'>
                  <div>20-21 พ.ค. 67</div>
                </td>
                <td className='c6'>
                  <strong className='color-red'>26 พ.ค. 67</strong>
                </td>
              </tr>

              <tr className='round-4'>
                <td className='c1'>4</td>
                <td className='c2'>Direct Admission</td>
                <td className='c3'>ที่ระบบของมหาวิทยลัย <br></br> 27 พ.ค. - 5 มิ.ย 67</td>
                <td className='c4'>
                  <div>6 มิ.ย. 67 <br></br> 17 มิ.ย. 67</div>
                </td>
                <td className='c5'>
                  <div>6-7 มิ.ย. 67 <br></br> 17-18 มิ.ย. 67</div>
                </td>
                <td className='c6'>
                  -
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='e-label'>
          <div className='col-left'>
            <strong>หมายเหตุ</strong>
          </div>

          <ul className='col-right'>
            <li>
              <strong className='num'>1</strong>
              ผู้สมัครเเต่ละคนสามารถ <u>สละสิทธิ์ได้สูงสุดเพียง 1 ครั้ง</u>เเละต้องดำเนินการในช่วงเวลาที่เปิดให้เท่านั้น เพื่อจะสมัครรอบถัดไปได้
            </li>

            <li className='color-red'>
              <strong className='num'>2</strong>
              <strong>26 พ.ค. 67</strong> เฉพาะผู้ที่ยืนยันสิทธิ์รอบ 3 Admission เเละไม่เคยสละสิทธิ์มาก่อน<u>เท่านั้น</u>
            </li>

            <li>
              <strong className='num'>3</strong>
              ประกาศจำนวนที่นั่งรอบ 4 Direct Admission <u>ที่ mytcas.com วันที่ 29 พ.ค. 67</u>
            </li>
          </ul>
        </div>
      </div>

      <hr></hr>

      <div className='exam-event'>
        <h2 className='ex-title'>ปฏิทินการสมัครสอบเเละปฏิทินการสอบ</h2>
        <h3>TGAT/TPAT เเละ A-Level ปีการศึกษา 2567</h3>
        <div className='ex-pic'>
          <a href='https://www.mytcas.com/img/tc67-tgat-tpat.jpg' title='TCAS67 TGAT/TPAT' target='_blank'>
            <img src='https://www.mytcas.com/img/tc67-tgat-tpat.webp' width={440} height={1000}></img>
          </a>
          <a href='https://www.mytcas.com/img/tc67-a-level.jpg' title='TCAS67 A-Level' target='_blank'>
            <img src='https://www.mytcas.com/img/tc67-a-level.webp' width={440} height={1000}></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Info