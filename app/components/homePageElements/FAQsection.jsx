import Container from "../Container";
import '../../styles/Section-Divider.css'

import { Accordion, AccordionBody, AccordionHeader, AccordionList } from "@tremor/react";

const FAQsection = () => { 
  
    return ( 
        <>
            <div className={`divider divider-line`}> <span>FAQ</span> </div>
            <div className="my-8 py-8">
                <Container>
                    <AccordionList className="max-w-[1000px] mx-auto">
                        <Accordion>
                            <AccordionHeader>Question 1</AccordionHeader>
                            <AccordionBody>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est
                                congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.
                            </AccordionBody>
                        </Accordion>
                        <Accordion>
                            <AccordionHeader>Question 2</AccordionHeader>
                            <AccordionBody>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est
                                congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.
                            </AccordionBody>
                        </Accordion>
                        <Accordion>
                            <AccordionHeader>Question 3</AccordionHeader>
                            <AccordionBody>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est
                                congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.
                            </AccordionBody>
                        </Accordion>
                        <Accordion>
                            <AccordionHeader>Question 4</AccordionHeader>
                            <AccordionBody>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est
                                congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.
                            </AccordionBody>
                        </Accordion>
                    </AccordionList>
                </Container>
            </div>
            
        </>
    )
    
}

export default FAQsection;