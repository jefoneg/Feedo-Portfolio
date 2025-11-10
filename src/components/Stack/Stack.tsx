import CommonConstant from "../../constants/common.constant";
import { Stacks } from "../../dummy-data/stacks";
import "./Stack.css";

function Stack() {
  return (
    <div className="stacks-container">
      <div className="stacks-text">
        <h2>{CommonConstant.STRINGS.STACK}</h2>
      </div>
      <div className="content-container">
        {
          Stacks.STACKS_DATA.map((stack) => (
            <div className="stacks-content" key={stack.name || stack.icon}>
              <div className="stacks-image">
                <img src={stack?.icon} alt={stack?.name} />
              </div>
              <div className="stacks-text">
                <div className="stacks-name">
                  <p>{stack?.name}</p>
                </div>
                <div className="stack-details">
                  <p>{stack?.details}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Stack;