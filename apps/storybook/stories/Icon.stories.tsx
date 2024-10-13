import type { IconProps } from '@repo/ui';
import { Icon } from '@repo/ui';
import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<IconProps<'svg'>> = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    name: {
      control: {
        type: 'radio',
        options: [
          'IcAndroid',
          'IcApps',
          'IcArrowDown',
          'IcArrowLeft',
          'IcArrowRight',
          'IcArrowUp',
          'IcBell',
          'IcBellFill',
          'IcBellPlus',
          'IcBook',
          'IcBookFill',
          'IcBookmark',
          'IcBookmarkFill',
          'IcBubble',
          'IcBubbleFill',
          'IcBubblePlus',
          'IcBubblePlusFill',
          'IcBusinessBag',
          'IcBusinessBagFill',
          'IcCalendar',
          'IcCamera',
          'IcCameraFill',
          'IcCaretDown',
          'IcCaretUp',
          'IcChange',
          'IcCheck',
          'IcCheckThick',
          'IcChevronDoubleLeft',
          'IcChevronDoubleLeftThick',
          'IcChevronDoubleRight',
          'IcChevronDoubleRightThick',
          'IcChevronDown',
          'IcChevronDownThick',
          'IcChevronLeft',
          'IcChevronLeftThick',
          'IcChevronRight',
          'IcChevronRightThick',
          'IcChevronUp',
          'IcChevronUpThick',
          'IcCircle',
          'IcCircleBlock',
          'IcCircleCheck',
          'IcCircleCheckFill',
          'IcCircleClose',
          'IcCircleExclamation',
          'IcCircleExclamationFill',
          'IcCircleFill',
          'IcCircleInfo',
          'IcCircleInfoFill',
          'IcCirclePlus',
          'IcCirclePlusFill',
          'IcCirclePoint',
          'IcCircleQuestion',
          'IcCircleQuestionFill',
          'IcClose',
          'IcCloseThick',
          'IcCoffeeCup',
          'IcCoffeeCupFill',
          'IcCoins',
          'IcCoinsFill',
          'IcCompany',
          'IcCompanyCheck',
          'IcCompanyCheckFill',
          'IcCompanyFill',
          'IcCompanyPlus',
          'IcCompanyPlusFill',
          'IcCompass',
          'IcCompassfill',
          'IcCopy',
          'IcCrown',
          'IcCrownFill',
          'IcDesktop',
          'IcDesktopFill',
          'IcDocument',
          'IcDocumentFill',
          'IcDocumentPerson',
          'IcDocumentPersonFill',
          'IcDocumentText',
          'IcDocumentTextFill',
          'IcDot',
          'IcDownload',
          'IcExclamation',
          'IcExternalLink',
          'IcFaceSmile',
          'IcFaceSmileFill',
          'IcFilter',
          'IcFilterFill',
          'IcFolder',
          'IcFolderFill',
          'IcFolderJob',
          'IcFolderJobFill',
          'IcFolderStar',
          'IcFolderStarFill',
          'IcFull',
          'IcGithub',
          'IcGlobe',
          'IcGraduation',
          'IcHandle',
          'IcHeart',
          'IcHeartFill',
          'IcHistory',
          'IcHome',
          'IcHomeFill',
          'IcImage',
          'IcKeyboard',
          'IcLike',
          'IcLikeFill',
          'IcLineHorizontal',
          'IcLineHorizontalThick',
          'IcLink',
          'IcList',
          'IcListCategory',
          'IcLocation',
          'IcLocationFill',
          'IcLock',
          'IcLockFill',
          'IcLockOpen',
          'IcLockOpenFill',
          'IcLogo',
          'IcLogo1',
          'IcLogo2',
          'IcLogoApple',
          'IcLogoFacebook',
          'IcLogoGooglePlay',
          'IcLogoInstagram',
          'IcLogoKakao',
          'IcLogoLinkedIn',
          'IcLogoNaverBlog',
          'IcLogoYoutube',
          'IcMagicWand',
          'IcMail',
          'IcMenu',
          'IcMenuThick',
          'IcMessage',
          'IcMessageFill',
          'IcMinus',
          'IcMinusThick',
          'IcMobile',
          'IcMobileFill',
          'IcMoreHorizontal',
          'IcMorevertical',
          'IcMoreverticalTight',
          'IcPause',
          'IcPencil',
          'IcPencilFill',
          'IcPerson',
          'IcPersonFill',
          'IcPersonPlus',
          'IcPersonPlusFill',
          'IcPersons',
          'IcPersonsFill',
          'IcPin',
          'IcPinFill',
          'IcPlay',
          'IcPlus',
          'IcPlusThick',
          'IcQuestion',
          'IcRefresh',
          'IcSearch',
          'IcSearchThick',
          'IcSend',
          'IcSendFill',
          'IcSetting',
          'IcShare',
          'IcShareIos',
          'IcSquare',
          'IcSquareFill',
          'IcSquareHan',
          'IcSquareHangul',
          'IcSquareKana',
          'IcSquareLatin',
          'IcSquareMore',
          'IcSquarePlus',
          'IcSquarePlusFill',
          'IcStar',
          'IcStarFill',
          'IcTemplate',
          'IcTemplateFill',
          'IcThumbnail',
          'IcThunder',
          'IcThunderFill',
          'IcTrash',
          'IcTriangle',
          'IcTriangleExclamation',
          'IcTriangleExclamationFill',
          'IcTriangleFill',
          'IcTrophy',
          'IcTrophyFill',
          'IcTune',
          'IcTwitter',
          'IcUpload',
          'IcVerifiedCheck',
          'IcVerifiedCheckFill',
          'IcVerifiedStar',
          'IcVerifiedStarFill',
          'IcView',
          'IcViewFill',
          'IcViewslash',
          'IcViewslashFill',
          'IcWeb',
          'IcWrite',
        ],
      },
      description: 'Icon타입에 따른 컴포넌트 이름을 정합니다.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export default meta;

export const Android = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcAndroid" />
);
export const Apps = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcApps" />
);
export const ArrowDown = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcArrowDown" />
);
export const ArrowLeft = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcArrowLeft" />
);
export const ArrowRight = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcArrowRight" />
);
export const ArrowUp = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcArrowUp" />
);
export const Bell = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBell" />
);
export const BellFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBellFill" />
);
export const BellPlus = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBellPlus" />
);
export const Book = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBook" />
);
export const BookFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBookFill" />
);
export const Bookmark = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBookmark" />
);
export const BookmarkFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBookmarkFill" />
);
export const Bubble = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBubble" />
);
export const BubbleFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBubbleFill" />
);
export const BubblePlus = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBubblePlus" />
);
export const BubblePlusFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBubblePlusFill" />
);
export const BusinessBag = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBusinessBag" />
);
export const BusinessBagFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcBusinessBagFill" />
);
export const Calendar = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCalendar" />
);
export const Camera = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCamera" />
);
export const CameraFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCameraFill" />
);
export const CaretDown = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCaretDown" />
);
export const CaretUp = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCaretUp" />
);
export const Change = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChange" />
);
export const Check = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCheck" />
);
export const CheckThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCheckThick" />
);
export const ChevronDoubleLeft = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChevronDoubleLeft" />
);
export const ChevronDoubleLeftThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChevronDoubleLeftThick" />
);
export const ChevronDoubleRight = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChevronDoubleRight" />
);
export const ChevronDoubleRightThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChevronDoubleRightThick" />
);
export const ChevronDown = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChevronDown" />
);
export const ChevronDownThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChevronDownThick" />
);
export const ChevronLeft = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChevronLeft" />
);
export const ChevronLeftThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChevronLeftThick" />
);
export const ChevronRight = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChevronRight" />
);
export const ChevronRightThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChevronRightThick" />
);
export const ChevronUp = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChevronUp" />
);
export const ChevronUpThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcChevronUpThick" />
);
export const Circle = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCircle" />
);
export const CircleBlock = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCircleBlock" />
);
export const CircleCheck = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCircleCheck" />
);
export const CircleCheckFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCircleCheckFill" />
);
export const CircleClose = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCircleClose" />
);
export const CircleExclamation = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCircleExclamation" />
);
export const CircleExclamationFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCircleExclamationFill" />
);
export const CircleFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCircleFill" />
);
export const CircleInfo = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCircleInfo" />
);
export const CircleInfoFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCircleInfoFill" />
);
export const CirclePlus = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCirclePlus" />
);
export const CirclePlusFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCirclePlusFill" />
);
export const CirclePoint = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCirclePoint" />
);
export const CircleQuestion = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCircleQuestion" />
);
export const CircleQuestionFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCircleQuestionFill" />
);
export const Close = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcClose" />
);
export const CloseThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCloseThick" />
);
export const CoffeeCup = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCoffeeCup" />
);
export const CoffeeCupFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCoffeeCupFill" />
);
export const Coins = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCoins" />
);
export const CoinsFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCoinsFill" />
);
export const Company = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCompany" />
);
export const CompanyCheck = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCompanyCheck" />
);
export const CompanyCheckFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCompanyCheckFill" />
);
export const CompanyFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCompanyFill" />
);
export const CompanyPlus = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCompanyPlus" />
);
export const CompanyPlusFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCompanyPlusFill" />
);
export const Compass = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCompass" />
);
export const Compassfill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCompassfill" />
);
export const Copy = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCopy" />
);
export const Crown = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCrown" />
);
export const CrownFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcCrownFill" />
);
export const Desktop = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcDesktop" />
);
export const DesktopFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcDesktopFill" />
);
export const Document = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcDocument" />
);
export const DocumentFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcDocumentFill" />
);
export const DocumentPerson = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcDocumentPerson" />
);
export const DocumentPersonFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcDocumentPersonFill" />
);
export const DocumentText = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcDocumentText" />
);
export const DocumentTextFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcDocumentTextFill" />
);
export const Dot = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcDot" />
);
export const Download = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcDownload" />
);
export const Exclamation = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcExclamation" />
);
export const ExternalLink = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcExternalLink" />
);
export const FaceSmile = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcFaceSmile" />
);
export const FaceSmileFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcFaceSmileFill" />
);
export const Filter = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcFilter" />
);
export const FilterFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcFilterFill" />
);
export const Folder = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcFolder" />
);
export const FolderFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcFolderFill" />
);
export const FolderJob = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcFolderJob" />
);
export const FolderJobFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcFolderJobFill" />
);
export const FolderStar = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcFolderStar" />
);
export const FolderStarFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcFolderStarFill" />
);
export const Full = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcFull" />
);
export const Github = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcGithub" />
);
export const Globe = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcGlobe" />
);
export const Graduation = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcGraduation" />
);
export const Handle = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcHandle" />
);
export const Heart = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcHeart" />
);
export const HeartFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcHeartFill" />
);
export const History = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcHistory" />
);
export const Home = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcHome" />
);
export const HomeFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcHomeFill" />
);
export const Image = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcImage" />
);
export const Keyboard = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcKeyboard" />
);
export const Like = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLike" />
);
export const LikeFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLikeFill" />
);
export const LineHorizontal = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLineHorizontal" />
);
export const LineHorizontalThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLineHorizontalThick" />
);
export const Link = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLink" />
);
export const List = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcList" />
);
export const ListCategory = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcListCategory" />
);
export const Location = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLocation" />
);
export const LocationFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLocationFill" />
);
export const Lock = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLock" />
);
export const LockFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLockFill" />
);
export const LockOpen = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLockOpen" />
);
export const LockOpenFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLockOpenFill" />
);
export const Logo = (props: IconProps<'svg'>) => (
  <Icon {...props} width={120} height={120} name="IcLogo" />
);
export const LogoType1 = (props: IconProps<'svg'>) => (
  <Icon {...props} width={120} height={120} name="IcLogoType1" />
);
export const LogoType2 = (props: IconProps<'svg'>) => (
  <Icon {...props} width={120} height={120} name="IcLogoType2" />
);
export const LogoApple = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLogoApple" />
);
export const LogoFacebook = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLogoFacebook" />
);
export const LogoGooglePlay = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLogoGooglePlay" />
);
export const LogoInstagram = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLogoInstagram" />
);
export const LogoKakao = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLogoKakao" />
);
export const LogoLinkedIn = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLogoLinkedIn" />
);
export const LogoNaverBlog = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLogoNaverBlog" />
);
export const LogoYoutube = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcLogoYoutube" />
);
export const MagicWand = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMagicWand" />
);
export const Mail = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMail" />
);
export const Menu = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMenu" />
);
export const MenuThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMenuThick" />
);
export const Message = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMessage" />
);
export const MessageFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMessageFill" />
);
export const Minus = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMinus" />
);
export const MinusThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMinusThick" />
);
export const Mobile = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMobile" />
);
export const MobileFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMobileFill" />
);
export const MoreHorizontal = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMoreHorizontal" />
);
export const MoreVertical = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMorevertical" />
);
export const MoreVerticalTight = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcMoreverticalTight" />
);
export const Pause = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPause" />
);
export const Pencil = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPencil" />
);
export const PencilFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPencilFill" />
);
export const Person = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPerson" />
);
export const PersonFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPersonFill" />
);
export const PersonPlus = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPersonPlus" />
);
export const PersonPlusFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPersonPlusFill" />
);
export const Persons = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPersons" />
);
export const PersonsFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPersonsFill" />
);
export const Pin = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPin" />
);
export const PinFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPinFill" />
);
export const Play = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPlay" />
);
export const Plus = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPlus" />
);
export const PlusThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcPlusThick" />
);
export const Question = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcQuestion" />
);
export const Refresh = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcRefresh" />
);
export const Search = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSearch" />
);
export const SearchThick = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSearchThick" />
);
export const Send = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSend" />
);
export const SendFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSendFill" />
);
export const Setting = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSetting" />
);
export const Share = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcShare" />
);
export const ShareIos = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcShareIos" />
);
export const Square = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSquare" />
);
export const SquareFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSquareFill" />
);
export const SquareHan = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSquareHan" />
);
export const SquareHangul = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSquareHangul" />
);
export const SquareKana = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSquareKana" />
);
export const SquareLatin = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSquareLatin" />
);
export const SquareMore = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSquareMore" />
);
export const SquarePlus = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSquarePlus" />
);
export const SquarePlusFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcSquarePlusFill" />
);
export const Star = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcStar" />
);
export const StarFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcStarFill" />
);
export const Template = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcTemplate" />
);
export const TemplateFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcTemplateFill" />
);
export const Thumbnail = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcThumbnail" />
);
export const Thunder = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcThunder" />
);
export const ThunderFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcThunderFill" />
);
export const Trash = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcTrash" />
);
export const Triangle = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcTriangle" />
);
export const TriangleExclamation = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcTriangleExclamation" />
);
export const TriangleExclamationFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcTriangleExclamationFill" />
);
export const TriangleFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcTriangleFill" />
);
export const Trophy = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcTrophy" />
);
export const TrophyFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcTrophyFill" />
);
export const Tune = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcTune" />
);
export const Twitter = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcTwitter" />
);
export const Upload = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcUpload" />
);
export const VerifiedCheck = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcVerifiedCheck" />
);
export const VerifiedCheckFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcVerifiedCheckFill" />
);
export const VerifiedStar = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcVerifiedStar" />
);
export const VerifiedStarFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcVerifiedStarFill" />
);
export const View = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcView" />
);
export const ViewFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcViewFill" />
);
export const ViewSlash = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcViewslash" />
);
export const ViewSlashFill = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcViewslashFill" />
);
export const Web = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcWeb" />
);
export const Write = (props: IconProps<'svg'>) => (
  <Icon {...props} width={32} height={32} name="IcWrite" />
);
