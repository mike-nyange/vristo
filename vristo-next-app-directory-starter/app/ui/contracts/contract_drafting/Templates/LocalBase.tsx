import React, { ReactNode } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import contractImage from './logo.png';
// import './contract-style.css'

interface BaseContractTemplateProps {
  children?: ReactNode;
}
// const containerStyle = {
//     fontFamily: 'Times New Roman, Times, serif'
//   };


const BaseLocalContractTemplate: React.FC<BaseContractTemplateProps> = ({ children }) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <header className="py-3 text-center">
                    <h1 className='text-uppercase mb-2 fs-20 mt-4 fw-bold'>Ministry of Health</h1>
                    <img src={'./logo.png'} alt="Botswana Logo" width={150} className="img-fluid mb-4" />
                    <h1 className="text-uppercase fw-bold fs-18 mb-5">Memorandum of Agreement</h1>
                    <h2 className='fs-14'>ENTERED INTO BY AND BETWEEN</h2>
                    <h2 className='fw-bold fs-18'>THE GOVERNMENT OF THE REPUBLIC OF BOTSWANA</h2>
                    <h2 className='text-uppercase fs-14 mb-4'>Representing</h2>
                    <h2 className='fw-bold fs-18'>CENTRAL MEDICAL STORES</h2>
                    <span className='fs-12'>(herein referred to as “the Client”)</span> <br /> <br />
                    <h2 className='fs-18'>AND <br /> <br />
                    <div className='row justify-content-center'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <input type="text" name="supplierName" id="supplierName" placeholder='Insert Supplier Name' className='form-control form-control-sm text-center'/><br />
                        </div>
                    </div>
                    <span className='fs-12'>(Herein referred to as “the Supplier”)</span><br /> <br />
                    <div className='fs-14'>
                    <div className='col-12'>
                        <div className="row justify-content-center">
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='d-flex align-items-center no-wrap'>CONTRACT NO. <input type='text' placeholder='Insert Contract No.' className='form-control form-control-sm' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className="row justify-content-center">
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='d-flex align-items-center no-wrap'>TENDER NUMBER: <input type='text' placeholder='Insert Tender No.' className='form-control form-control-sm'/></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </h2>
                    <h2 className='fs-16 fw-bold mt-5'>Supplies Contract for the Procurement of </h2>
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-8 col-lg-6">
                            <textarea name="gDescription" id="gDescription" placeholder='Describe the general term for the specific Supplies procured' className='form-control form-control-sm' rows={5}></textarea>
                        </div>
                    </div>
                </header>
            </div>
        </div>
      <main className="py-4">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h4 className='fw-bold'>PREAMBLE</h4>
            <p><strong>WHEREAS</strong> Central Medical Stores (hereinafter “the Client”) is mandated to avail medical products at affordable prices to public health facilities;</p>
            <p><strong>AND WHEREAS</strong> the Client requires the supply and delivery of <code>[[General Description]]</code>;</p>
            <p><strong>AND WHEREAS</strong> <code>[[Supplier Name]]</code> (hereinafter “the Supplier”) is a distributor of medical products;</p>
            <p><strong>WHEREFORE</strong> the Supplier having demonstrated its capacity to meet the needs of the Client, through the submission of a quotation of the medical products sought by Client;</p>
            <p><strong>NOW THEREFORE</strong> the Parties agree as follows:</p>
            {children}
          </div>
        </div>
      </main>
      <footer className="py-3">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h4 className='fw-bold'>EXECUTION</h4>
                <p>The duly authorised representatives of the Client and the Supplier whose signatures appear below execute this Agreement.</p>
                <p><strong>THUS DONE AND EXECUTED IN</strong> …………………………………………………… this ……………………………day of……………………………………….20……</p>
                <p><strong>FOR AND ON BEHALF OF THE MINISTRY OF HEALTH</strong></p>
                <div className="row">
                    <div className="col">
                    …………………………………………………… <br />                            
                        <p className='pt-0 mt-0'>NAME</p> 	
                    </div>
                    <div className="col">
                        …………………………………… <br />
                        <p>SIGNATURE</p>
                    </div>
                </div>
                <p>being authorised in this capacity as ……………………………………………………</p>
                <h4 className='fw-bold'>Witnesses:</h4>	
                1.
                <div className="row">
                    <div className="col">
                    …………………………………………………… <br />                           
                        <p>NAME</p> 	
                    </div>
                    <div className="col">
                        …………………………………… <br />
                        <p>SIGNATURE</p>
                    </div>
                </div>
                2.
                <div className="row">
                    <div className="col">
                    …………………………………………………… <br />                             
                        <p>NAME</p> 	
                    </div>
                    <div className="col">
                        …………………………………… <br />
                        <p>SIGNATURE</p>
                    </div>
                </div>
                <p><strong>THUS DONE AND EXECUTED IN</strong> …………………………………………………… this ……………………………day of……………………………………….20……</p>
                FOR AND ON BEHALF OF
                <div className="row">
                    <div className="col">
                        <code>[[ SUPPLIER NAME ]]</code>   <br />                                
                        <p>NAME</p> 	
                    </div>
                    <div className="col">
                        …………………………………… <br />
                        <p>SIGNATURE</p>
                    </div>
                </div>
                <p>being authorised in this capacity as ……………………………………………………</p>
                <h4 className='fw-bold'>Witnesses:</h4>	
                1.
                <div className="row">
                    <div className="col">
                    …………………………………………………… <br />                             
                        <p>NAME</p> 	
                    </div>
                    <div className="col">
                        …………………………………… <br />
                        <p>SIGNATURE</p>
                    </div>
                </div>
                2.
                <div className="row">
                    <div className="col">
                    …………………………………………………… <br />                            
                        <p>NAME</p> 	
                    </div>
                    <div className="col">
                        …………………………………… <br />
                        <p>SIGNATURE</p>
                    </div>
                </div>
            </div>
        </div>
      </footer>
      <div className="py-4 text-center">
        <h4 className="fw-bold my-2">Appendix A</h4>
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h5>SUPPLIER’S PRICE SCHEDULE</h5>
            </div>
        </div>
        <h4 className="fw-bold my-2">Appendix B</h4>
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h5>General Specifications</h5>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BaseLocalContractTemplate;