import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div` 
    background: url('./stars.png');
		background-size: cover;
    overflow: hidden;
    color: #ffb13a;

    .crawl {
		font-family: Arial, sans-serif;
		text-align: justify;
		margin: 0 auto;
		font-weight: 800;
		font-size: 50px;
		line-height: 80px;
		width: 1000px;
		height: 1600px;
		transform: perspective(250px) rotateX(20deg);
		animation: scrollCrawl 90s linear;
	}

	.preheader {
		text-align: center;
		margin: 40px 0;
	}

	.header {
		text-align: center;
		margin: 0 0 100px 0;
	}

	@keyframes scrollCrawl {
		0% {
			transform: perspective(250px) rotateX(20deg) translateY(680px);
			opacity: 1;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: perspective(250px) rotateX(20deg) translateY(-4000px);
			opacity: 0;
		}
	}
		
`;


export default function Home() {
  return (
    <Wrapper >
      <div className="crawl">
        <p className="preheader">Hello Oleksandr!</p>
        <h2 className="header">THIS IS MY HOMEWORK</h2>
        <p>
          This is my react app 
        </p>
        <p>
          With the support of the REPUBLIC, I create it. Unfortunately, I could not figure out how to set the picture on the background body element, 
					so I decided to pass it how it's look like
        </p>
        <p>	I hope you will like my app </p>
      </div>
    </Wrapper>
  )
}
