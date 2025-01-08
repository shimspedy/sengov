import type { Config } from '@netlify/functions';

// Stop TypeScript from complaining about the environment variable
declare var process: {
    env: {
        NETLIFY_REBUILD_HOOK: string;
    };
};

// Function to trigger the build
const rebuildSite = async (triggerTitle: string) => {
    const url = new URL(process.env.NETLIFY_REBUILD_HOOK);
    url.searchParams.append('trigger_title', triggerTitle);

    return await fetch(url.toString(), {
        method: 'POST',
    });
};

// Scheduled function logic
export default async () => {
    console.log("Triggering scheduled site rebuild...");
    await rebuildSite('Scheduled rebuild (thrice daily)');
};

// Schedule: Runs 3 times a day at 6 AM, 2 PM, and 10 PM
export const config: Config = {
    schedule: '0 6,14,22 * * *', // Cron syntax for specific times
};
