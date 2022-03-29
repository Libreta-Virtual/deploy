import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <footer className='footer' style={{  backgroundColor: '#151D3B' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center" style={{ color: '#6EBF8B' }}>&copy; {new Date().getFullYear()} Copyright. PDTC</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
