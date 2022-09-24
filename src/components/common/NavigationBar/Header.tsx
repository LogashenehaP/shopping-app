import { navigationContent } from '../../../resources/String';
import { NavigationBar, LogoImage, AnchorTag } from './HeaderStyle';
import { image } from '../../../resources/Images';

const Header: React.FC = () => {
  return (
    <div>
      <NavigationBar>
        <LogoImage src={image.appLogo} />
        <AnchorTag>{navigationContent.profile}</AnchorTag>
        <AnchorTag>{navigationContent.home}</AnchorTag>
        <AnchorTag>{navigationContent.contact}</AnchorTag>
        <AnchorTag>{navigationContent.about}</AnchorTag>
      </NavigationBar>
    </div>
  );
};

export default Header;
