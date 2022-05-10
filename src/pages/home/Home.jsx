import "./home.css";
import Charts from "../../components/charts/Charts";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import {userData} from "../../Dummydata";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/wigetLg/WidgetLg";
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Charts data={userData} title="lihidw"  dataKey="user"/>
      <div className="homeWidgets">
         <WidgetSm/>
         <WidgetLg/>
      </div>
      </div>
  )
}
