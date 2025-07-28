/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

const options = {
    type: "EXPERIMENT_OVERRIDE_BUCKET" as const,
    experimentId: "2023-10_social_proofing_message_nitro_badge",
};

const settings = definePluginSettings({
    experimentTreatment: {
        description: "Which treatment to enable the experiment with",
        type: OptionType.SELECT,
        restartNeeded: true,
        options: [
            { label: "Treatment 1: Prefer BOTH nitro badge AND role icon(s)", value: "1", default: true },
            { label: "Treatment 2: Prefer role icon(s) over nitro badge if both are present", value: "2" },
        ]
    }
});

export { options, settings };
