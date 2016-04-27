package hello;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class GreetingController {

    @MessageMapping("/{gatewayId}/hello")
    @SendTo("/topic/haha/greetings")
    public Greeting greeting(HelloMessage message,@DestinationVariable String gatewayId) throws Exception {
        Thread.sleep(30);
        return new Greeting("Hello, gatewayId: " + gatewayId + " name: " + message.getName() + "!");
    }
    
    @MessageMapping("/channel1")
    @SendTo("/topic/haha/greeting1")
    public Greeting greeting1() throws Exception {
        Thread.sleep(30);
        return new Greeting("This is from channel1");
    }

}