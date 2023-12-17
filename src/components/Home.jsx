import React from 'react'
import proImg from '../proimg.jpeg'
import cryptude from '../cryptude.png'
import unilib from '../unilib.png'
import hodlpay from '../hodlpay.png'
import shnp from '../shnp.png'
import digi from '../digi.png'
import diji from '../diji.png'
import './home.css'


function Home() {
    const homeStyle = {
        position: 'absolute', 
        width: '100%',
        minHeight: '100%',
        background: 'rgba(0,0,0,.9)',
        color: 'ghostwhite',
        padding: '1.1rem'
    }
  return (
    <div className='home' style={homeStyle}>
        <header className='flex j-c-b mb-1' style={{padding: 'auto 1.5rem auto 1.5rem'}}>
            <section className="head1 flex j-c-b" style={{width: '120px'}}>
                <small>Works</small>
                <a href="#projects" style={{color: 'white'}}><small>Contacts</small></a>
            </section>
            <section className="head2" style={{width: '45px', height:'45px', borderRadius:'50%', overflow:'hidden'}}>
                <img src={proImg} alt="" className='img-fit'/>
            </section>
            <section className="head3 flex j-c-b" style={{width: '120px'}}>
                <a style={{color: 'white'}} href="https://wa.me/233542893124"><i className="fab fa-whatsapp"></i></a>
                <a style={{color: 'white'}} href="https://github.com/josh-codi"><i className="fab fa-github"></i></a>
                <a style={{color: 'white'}} href="https://linkedin.com/in/odamejoshua"><i className="fab fa-linkedin"></i></a>
                <a style={{color: 'white'}} href="https://instagram.com/josh__joy"><i className="fab fa-instagram"></i></a>
            </section>
        </header><br />
        <main className='flex v-flex j-c-c a-i-c' style={{}}>
            <div className="mainHeader m-auto" style={{textAlign:'center'}}>
                <h1 style={{fontSize:'2.5rem', marginBottom:'0.5rem'}}>Joshua Odame<br/><h2 style={{fontSize:'1.3rem'}}>Software Engineer</h2></h1>
                <small>Frontend | Backend</small>
            </div><br />
            <hr className='m-auto' style={{width:'80%', backgroundColor:'#acdcff'}}/>
            <br />

            <div className="mainMiddle flex m-auto">
                <section className="middle1 flex v-flex" style={{width:'200px'}}>
                    <div className="flex v-flex mb-1">
                        <h4 className='mb-1' style={{color:'#acdcff'}}>Services</h4>
                        <small>Web Development</small>
                        <small>Mobile App Development</small>
                        <small>UI/UX Designing</small>
                    </div>
                    <div className="flex v-flex mb-1">
                        <h4 className='mb-1' style={{color:'#acdcff', margin:'0'}}>Prjects</h4>
                        <h1 style={{fontSize:'4rem'}}>5<small style={{fontSize:'1rem'}}>live</small></h1>
                    </div>
                    <div className="flex v-flex mb-1">
                        <h4 className='mb-1' style={{color:'#acdcff'}}>Education</h4>
                        <small>University of Energy and Natural Resorces</small>
                        <small>Sunyani, Ghana</small>
                        <small>BSc. Computer Engineering</small>
                    </div>
                </section>
                <section className="middle2" style={{margin:'2rem',width: '250px', height:'380px', borderTopLeftRadius:'40%', borderTopRightRadius:'40%',borderBottomLeftRadius:'40%',borderBottomRightRadius:'40%',overflow:'hidden', border: '20px solid #acdcff'}}>
                    <img src={proImg} alt="" className='img-fit' />
                </section>
                <section className="middle3 flex v-flex" style={{width:'200px'}}>
                    <div className="flex v-flex mb-1">
                        <h4 className='mb-1' style={{color:'#acdcff', margin:'0'}}>Experience</h4>
                        <h1 style={{fontSize:'4rem'}}>5<small style={{fontSize:'1rem'}}>years +</small></h1>
                    </div>
                    <div className="flex v-flex mb-1">
                        <h4 className='mb-1' style={{color:'#acdcff'}}>Services</h4>
                        <small>Web Development</small>
                        <small>Mobile App Development</small>
                        <small>UI/UX Designing</small>
                    </div>
                    <div className="flex v-flex mb-1">
                        <h4 className='mb-1' style={{color:'#acdcff'}}>Contact</h4>
                        <small>Accra, Ghana</small>
                        <a href="mailto:odamejoshua37@gmail.com" style={{color:'white'}}><small>odamejoshua37@gmail.com</small></a>
                        <a href="tel:233542893124" style={{color:'white'}}><small>+233 542 893 124</small></a>
                    </div>
                </section>
            </div>
            <div className="mainMiddle_mobile v-flex m-auto">
                <section className="sec1"style={{margin:'1rem',width: '95%', height:'400px',borderRadius:'10px',overflow:'hidden', border: '5px solid #acdcff'}}>
                    {/* <img src={proImg} alt="" className='img-fit' /> */}
                </section>
                <section className="sec2 m-auto">
                    <div className="flex v-flex mb-1">
                        <h4 className='mb-1' style={{color:'#acdcff'}}>Services</h4>
                        <small>Web Development</small>
                        <small>Mobile App Development</small>
                        <small>UI/UX Designing</small>
                    </div>
                    <div className="flex v-flex mb-1">
                        <h4 className='mb-1' style={{color:'#acdcff', margin:'0'}}>Prjects</h4>
                        <h1 style={{fontSize:'4rem'}}>5<small style={{fontSize:'1rem'}}>live</small></h1>
                    </div>
                    <div className="flex v-flex mb-1">
                        <h4 className='mb-1' style={{color:'#acdcff'}}>Education</h4>
                        <small>University of Energy and Natural Resorces</small>
                        <small>Sunyani, Ghana</small>
                        <small>BSc. Computer Engineering</small>
                    </div>
                    <div className="flex v-flex mb-1">
                        <h4 className='mb-1' style={{color:'#acdcff', margin:'0'}}>Experience</h4>
                        <h1 style={{fontSize:'4rem'}}>5<small style={{fontSize:'1rem'}}>years +</small></h1>
                    </div>
                    <div className="flex v-flex mb-1">
                        <h4 className='mb-1' style={{color:'#acdcff'}}>Services</h4>
                        <small>Web Development</small>
                        <small>Mobile App Development</small>
                        <small>UI/UX Designing</small>
                    </div>
                    <div className="flex v-flex mb-1">
                        <h4 className='mb-1' style={{color:'#acdcff'}}>Contact</h4>
                        <small>Accra, Ghana</small>
                        <a href="mailto:odamejoshua37@gmail.com" style={{color:'white'}}><small>odamejoshua37@gmail.com</small></a>
                        <a href="tel:233542893124" style={{color:'white'}}><small>+233 542 893 124</small></a>
                    </div>
                </section>
            </div>

        </main><br />
        <h2 id='projects' style={{textAlign: 'center'}}>Projects</h2><br />
        <hr className='m-auto' style={{width:'80%', backgroundColor:'#acdcff'}}/>
        <br />
        <footer style={{overflow:'hidden', overflowX:'auto', border:'', width:'80%'}} className='homeFooter m-auto'>
            <section className="projects flex m-auto" style={{minWidth:'fit-content'}}>
                <div style={{width: '180px', minHeight: '250px',padding:'0.6rem', borderRadius:'8px', margin:'0 2rem 0 0', border:'1px solid #acdcff'}} className="">
                    <a href="https://cryptude.com" style={{color: 'white'}}>
                        <aside style={{width: '100%', height:'75%', overflow:'hidden', borderRadius:'8px'}} className="m-auto"> 
                            <img src={cryptude} alt="" className='img-fit'/>
                        </aside>
                        <aside className="flex v-flex" style={{padding:'', background:'', borderRadius:"8px", marginTop:'0.5rem', color:''}}>
                            <h5 style={{background:'#00508a', borderRadius:'4px', padding: '2px 5px 2px 5px', marginBottom:'3px'}}>Cryptude</h5>
                            <small style={{fontSize:'0.6rem', }}>A Fintech platform for crypto exchange</small>
                        </aside>
                    </a>
                    
                </div>
                <div style={{width: '180px', minHeight: '250px',padding:'0.6rem', borderRadius:'8px', margin:'0 2rem 0 0', border:'1px solid #acdcff'}} className="">
                    <a href="https://hodlpay.io" style={{color:'white'}}>
                        <aside style={{width: '100%', height:'75%', overflow:'hidden', borderRadius:'8px'}} className="m-auto"> 
                            <img src={diji} alt="" className='img-fit'/>
                        </aside>
                        <aside className="flex v-flex" style={{padding:'', background:'', borderRadius:"8px", marginTop:'0.5rem', color:''}}>
                            <h5 style={{background:'#658a00', borderRadius:'4px', padding: '2px 5px 2px 5px', marginBottom:'3px'}}>Dijievents</h5>
                            <small style={{fontSize:'0.6rem', }}>An Edutech platform for event organisation.</small>
                        </aside>
                    </a>
                </div>
                <div style={{width: '180px', minHeight: '250px',padding:'0.6rem', borderRadius:'8px', margin:'0 2rem 0 0', border:'1px solid #acdcff'}} className="">
                    <a href="https://unilibrary.netlify.com" style={{color: 'white'}}>
                    <aside style={{width: '100%', height:'75%', overflow:'hidden', borderRadius:'8px'}} className="m-auto"> 
                        <img src={unilib} alt="" className='img-fit'/>
                    </aside>
                    <aside className="flex v-flex" style={{padding:'', background:'', borderRadius:"8px", marginTop:'0.5rem', color:''}}>
                        <h5 style={{background:'#00888a', borderRadius:'4px', padding: '2px 5px 2px 5px', marginBottom:'3px'}}>Unilib</h5>
                        <small style={{fontSize:'0.6rem', }}>An Edutech platform where students share ideas and leanring resorces</small>
                    </aside>
                    </a>
                </div>
                <div style={{width: '180px', minHeight: '250px',padding:'0.6rem', borderRadius:'8px', margin:'0 2rem 0 0', border:'1px solid #acdcff'}} className="">
                    <a href="https://digimedd.com" style={{color:'white'}}>
                        <aside style={{width: '100%', height:'75%', overflow:'hidden', borderRadius:'8px'}} className="m-auto"> 
                            <img src={digi} alt="" className='img-fit'/>
                        </aside>
                        <aside className="flex v-flex" style={{padding:'', background:'', borderRadius:"8px", marginTop:'0.5rem', color:''}}>
                            <h5 style={{background:'#098a00', borderRadius:'4px', padding: '2px 5px 2px 5px', marginBottom:'3px'}}>Digimedd</h5>
                            <small style={{fontSize:'0.6rem', }}>A Health platform for servicing patients with health care for their homes</small>
                        </aside>
                    </a>
                </div>
                <div style={{width: '180px', minHeight: '250px',padding:'0.6rem', borderRadius:'8px', margin:'0 2rem 0 0', border:'1px solid #acdcff'}} className="">
                    <a href="https://hodlpay.io" style={{color:'white'}}>
                        <aside style={{width: '100%', height:'75%', overflow:'hidden', borderRadius:'8px'}} className="m-auto"> 
                            <img src={hodlpay} alt="" className='img-fit'/>
                        </aside>
                        <aside className="flex v-flex" style={{padding:'', background:'', borderRadius:"8px", marginTop:'0.5rem', color:''}}>
                            <h5 style={{background:'#8a0081', borderRadius:'4px', padding: '2px 5px 2px 5px', marginBottom:'3px'}}>Hodlpay</h5>
                            <small style={{fontSize:'0.6rem', }}>A fintech application for Cryptocurrency exchange</small>
                        </aside>
                    </a>
                </div>
                <div style={{width: '180px', minHeight: '250px',padding:'0.6rem', borderRadius:'8px', margin:'0 2rem 0 0', border:'1px solid #acdcff'}} className="">
                    <a href="https://hodlpay.io" style={{color:'white'}}>
                        <aside style={{width: '100%', height:'75%', overflow:'hidden', borderRadius:'8px'}} className="m-auto"> 
                            <img src={shnp} alt="" className='img-fit'/>
                        </aside>
                        <aside className="flex v-flex" style={{padding:'', background:'', borderRadius:"8px", marginTop:'0.5rem', color:''}}>
                            <h5 style={{background:'#00c5db', borderRadius:'4px', padding: '2px 5px 2px 5px', marginBottom:'3px'}}>SHNP</h5>
                            <small style={{fontSize:'0.6rem', }}>An Edutech application used by departments for managing data.</small>
                        </aside>
                    </a>
                </div>
            </section>
            
        </footer>
    </div>
  )
}

export default Home
