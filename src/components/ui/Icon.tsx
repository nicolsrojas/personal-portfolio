import React from "react"
import FrontendIcon from "../../icons/frontend.svg"
import BackendIcon from "../../icons/backend.svg"
import DatabaseIcon from "../../icons/database.svg"
import DevOpsIcon from "../../icons/devops.svg"
import CmsIcon from "../../icons/cms.svg"
import SeoIcon from "../../icons/seo.svg"
import CopyIcon from "../../icons/copy.svg"
import DownloadIcon from "../../icons/download.svg"
import MoonIcon from "../../icons/moon.svg"
import GlobeIcon from "../../icons/globe.svg"
import StarIcon from "../../icons/star.svg"
import DefaultIcon from "../../icons/default.svg"

export type IconName =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'cms'
  | 'seo'
  | 'copy'
  | 'download'
  | 'moon'
  | 'globe'
  | 'star';

interface IconProps {
    name: IconName;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
    const icons: Record<IconName, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
        frontend: FrontendIcon,
        backend: BackendIcon,
        database: DatabaseIcon,
        devops: DevOpsIcon,
        cms: CmsIcon,
        seo: SeoIcon,
        copy: CopyIcon,
        download: DownloadIcon,
        moon: MoonIcon,
        globe: GlobeIcon,
        star: StarIcon,
    };

    const SelectedIcon = icons[name] || DefaultIcon;

    return <SelectedIcon className={className} />;
}

export default Icon;