import logo from './logo.svg';
import logos from './logos.png';
import app_demo from './app-demo.png';
import credit_card from './credit-card.png';
import dollar from './dollar.png';
import wallet from './wallet.png';
import section1_graphic from './section1-graphic.png';
import profile_pic from './profile-pic.png';
import section2_graphic from './section2-graphic.png';
import './App.css';

function App() {
  return (
	<div className="App">
		<header className="App-header">
        	<div className="header-container">
          		<div className="header-element-logo">
            		Wallet
          		</div>
          		<div class="header-element-signup-login">
          			<button className="signup-button">Sign up</button>
          			<button className="login-button">Log in</button>
          		</div>
        	</div>  
      </header>

		<div className="section1">
			<div className="section1-text">
				<h1 style={{color:'white', size:'50px'}}>SaaS Landing</h1>
				<h1 style={{color:'white', size:'50px'}}>Page Template</h1>

				<p style={{color:"rgb(101,101,101)"}}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				Anima. <br/><br/>
				</p>

				<button className="get-started-button">Get Started</button>
			</div>

			<div className="section1-img">
				<img className="section1-graphic" src={section1_graphic} />
			</div>
		</div>

		<svg viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
			<line x1="25" y1="10" x2="275" y2="10" stroke="rgb(51,51,51)" stroke-width = "1"/>
		</svg>

		<div className="sponsors">
			<div className="logos">
				<img src={logos} />
			</div>
		</div>

		<svg viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
			<line x1="25" y1="10" x2="275" y2="10" stroke="rgb(51,51,51)" stroke-width = "1"/>
		</svg>	

		<div className="app-demo">
			<div className="gallery">
				<img src={app_demo} />
			</div>
		</div>

		<div className="features">
			<div className="features1">
				<img src={credit_card} height="100"/><br/>
				<b className="feature-title">Customizable card</b>
				<br/><br/>
				<p>Customize your own card for <br/>
				your exact incomes and <br/>
				expense needs.</p>
			</div>

			<div className="features2">
				<img src={dollar} height="100"/><br/>
				<b className="feature-title">No payment fee</b>
				<br/><br/>
				<p>Transfer your payment all <br/>
				over the world with no M <br/>
				payment fee.
				</p>
			</div>

			<div className="features3">
				<img src={wallet} height="100"/><br/>
				<b className="feature-title">All in one place</b>
				<br/><br/>
				<p>The right place to keep your <br/>
				credit and debit cards, <br/>
				boarding passes & more.
				</p>
			</div>
		</div>

		<div className="reviews">
		<div className="reviews-gallery">
			<div className="review-element">
				<b>"Wallet is a great product! All of my most important
				information is there - credit cards, transit cards, boarding
				passes, tickets, and more. And I don't need to worry because
				it's all in one place! thanks!"</b>
			</div>
			<div className="review-element">
				<div className="profile-and-name">
					<div className="profile-and-name-smaller">
						<div>
							<br/>
							<img className="review-profile" src={profile_pic} />
						</div>
						<div className="name-and-stars">
							Johnny Owens <br/><br/>
							<div className="stars">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
									<path d="m56,237 74-228 74,228L10,96h240"/>
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
									<path d="m56,237 74-228 74,228L10,96h240"/>
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
									<path d="m56,237 74-228 74,228L10,96h240"/>
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
									<path d="m56,237 74-228 74,228L10,96h240"/>
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
									<path d="m56,237 74-228 74,228L10,96h240"/>
								</svg>
							</div>
						</div>
					</div>
					<div>
					</div>
				</div>	
			</div>
		</div>
	</div>
	
		<div className = "section2">
			<div className="section2-text">
				<h1 style={{color:'white', size:'50px'}}>Questions?</h1>
				<h1 style={{color:'white', size:'50px'}}>Let's talk</h1>
				
				<p style={{color:'rgb(101,101,101)'}}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
					Anima. <br/><br/>
				</p>

			<button className="get-started-button">Get started</button>
			</div>
		
			<div className="section2-img">
				<img className="section2-graphic" src={section2_graphic}/>
			</div>
		</div>
	  
	    <svg viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
			<line x1="25" y1="10" x2="275" y2="10" stroke="rgb(51,51,51)" stroke-width = "1"/>
	    </svg>
		<br/>
		<br/>

		<div className="footer">
			<div className="footer-left">
				<div className="footer-logo">
					Wallet
				</div>
				<div className="footer-links">
					<div>
						&copy; Wallet 2022
					</div>
					<div>
						<a href="#" className="link">Privacy policy</a>
					</div>
					<div>
						<a href="#" className="link">Cookies policy</a>
					</div>
					<div>
						<a href="#" className="link">Terms of use</a>
					</div>
				</div>
			</div>
			<div className="footer-right">
				<div>
					Updates right to your inbox
				</div>
				<form className="contact-us-form">
					<div className="contact">
						<input className="contact-email" type="email" placeholder="Email address"></input>
						<div>
							<button className="contact-button">CTA</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
  );
}

export default App;
