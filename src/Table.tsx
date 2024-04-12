import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticSlotComponents } from "@inseefr/lunatic";

export const Table: LunaticSlotComponents["Table"] = props => {
    const { children, id } = props;
    return (
        <div id={id} className={fr.cx("fr-table", "fr-table--bordered")}>
            <table>{children}</table>
        </div>
    );
};
