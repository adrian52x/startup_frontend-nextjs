import Container from "../Container";
import '../../styles/Section-Divider.css'

import { Card, Metric, Text } from "@tremor/react";

const AboutUsSection = () => { 
  
    return ( 
        <>
            <div className={`divider divider-line`}> <span>About Us</span> </div>
            <div className="my-8 py-8">
                <Container>
                    {/* <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0  justify-center">
                        <div className="w-full md:w-[380px]  h-[230px] md:h-[300px] bg-gray-50 shadow-lg rounded-lg p-4">  
                            text
                        </div>
                        <div className="w-full md:w-[380px] h-[230px] md:h-[300px] bg-gray-50 shadow-lg rounded-lg p-4">
                            text
                        </div>
                        <div className="w-full md:w-[380px]  h-[230px] md:h-[300px] bg-gray-50 shadow-lg rounded-lg p-4">
                            text
                        </div>
                    </div> */}

                    <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 justify-center">
                        <Card className="md:max-w-sm" decoration="top" decorationColor="none">
                            <Metric>Who we are</Metric>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est
                                congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.
                            </Text>
                        </Card>

                        <Card className="md:max-w-sm " decoration="top" decorationColor="none">
                            <Metric>What we do</Metric>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est
                                congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.
                            </Text>
                        </Card>

                        <Card className="md:max-w-sm " decoration="top" decorationColor="none">
                            <Metric>Why we do it</Metric>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est
                                congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.
                            </Text>
                        </Card>
                    </div>
                    
                     
                </Container>
            </div>
            
        </>
    )
    
}

export default AboutUsSection;