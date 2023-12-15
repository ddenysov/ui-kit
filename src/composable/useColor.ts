import type {Color, Tint} from "@/types";

export default () => {
    const backgroundColorStyle = (color: Color, tint?: Tint) => {
        if (!tint) {
            tint = 500;
        }
        return 'var(--' + color + '-' + tint + ')';
    };

    return { backgroundColorStyle };
}
