/**
 * About, collaboration and import
 */
import React from 'react';
import './Container.css';

const AboutContainer = props => {
   return (
		<>
			<section className="About-Container">
				<div className="Heading-Group left">
					<h1 className="dark">
						It's not complicated
					</h1>
					<h3 className="dark">
						Tänk dig en pub som kanske inte bara är en pub. Samma känsla av att känna sig välkommen, samma inbjudande atmosfär, men med en känsla av att du klivit in i nåt unikt, nånting annorlunda och speciellt.
						<p>
							När vi öppnade 1993 var Sverige en öken. Av de få öl som fanns var nästan alla öl ljus tråkig lager, och det fanns inte många! Vi tyckte det var direkt fel, och det var tid för förändring. Som du märker har det hänt en del.
						</p>
					</h3>
				</div>

				<div className="About-Group">
					<div className="Heading-Group right">
						<h2 className="dark">
							Samarbete & Import
						</h2>
						<h3 className="dark">
							Sedan 2008 har vi med stor hjälp av vårt egna importföretag sett till att ha Nordens, om inte Europas starkaste utbud av Amerikansk Craft Beer i våra kylar. Så titta förbi och upptäck varför.
						</h3>
					</div>
					<div className="Image-Wrapper">

					</div>
				</div>

				<div className="About-Group">
					<div className="Heading-Group left">
						<h2 className="dark">
							Support your local brewers
						</h2>
						<h3 className="dark">
							Vi samarbetar nära med Sveriges skickligaste bryggare. Och man hittar allt från nyheter till gamla godingar på både fat och flaska. Många gånger får vi också besök av våra lokala stjärnor.
						</h3>
					</div>
					<div className="Image-Wrapper">

					</div>
				</div>
			</section>


			<section className="About-Container dark"
				style={{ paddingTop: '0' }}
			>
				<div className="About-Group">
					<div className="Heading-Group right">
						<h2>
							Med service i fokus
						</h2>
						<h3>
							Praesent tristique dui fringilla, blandit nibh eget, tempus tortor. Nam a porta enim. Donec venenatis ligula tortor, eu dictum arcu bibendum id. In sed odio ac turpis sodales facilisis.
						</h3>
					</div>
					<div className="Image-Wrapper">

					</div>
				</div>

				<div className="About-Group">
					<div className="Heading-Group left">
						<h2>
							Vi strävar efter kvalitet
						</h2>
						<h3>
							Vår hantering av Real Ale gjorde att vi 2001 fick den brittiska utmärkelsen Cask Marque som första pub utanför de brittiska öarna, en utmärkelse vi fått varje år sedan dess.
						</h3>
					</div>
					<div className="Image-Wrapper">

					</div>
				</div>
			</section>
		</>
   );
}

export default AboutContainer;