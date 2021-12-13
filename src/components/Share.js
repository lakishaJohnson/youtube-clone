import React from "react";
import { 
    TwitterIcon,
    TwitterShareButton, 
} from "react-share"

class Share extends React.Component {
    render() {
        return(
            <div>
                <TwitterShareButton title="Tweet, Tweet"
                url="http://www.google.com">
                    <TwitterIcon size={32} />
                </TwitterShareButton>
            </div>
)
}
}

        

export default Share