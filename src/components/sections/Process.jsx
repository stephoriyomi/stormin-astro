import { useState } from 'react';
import '../../styles/process.css';

const steps = [
    {
        num: '01',
        title: 'Discovery',
        weeks: '1-2',
        duration: '1-2',
        desc: 'Audit current state. Map systems, stakeholders, and data flows. Output: a prioritized roadmap with effort + impact estimates.',
        deliverable: 'Strategy memo + RACI',
    },
    {
        num: '02',
        title: 'Design',
        weeks: '2-3',
        duration: '2-3',
        desc: 'Architecture blueprint with explicit tradeoffs. We argue with you, not at you. Decision logs become onboarding docs later.',
        deliverable: 'Architecture diagrams + ADRs',
    },
    {
        num: '03',
        title: 'Build',
        weeks: '4-8',
        duration: '4-8',
        desc: 'Iterative delivery in two-week increments. Demo-driven. Tests, lineage, and documentation ship with the code.',
        deliverable: 'Production pipelines + CI/CD',
    },
    {
        num: '04',
        title: 'Hand-off',
        weeks: '9-10',
        duration: '1-2',
        desc: 'Runbooks, on-call playbooks, and pair programming. We leave when your team can extend the system without us.',
        deliverable: 'Runbooks + 30-day support',
    },
];

const Process = () => {
    const [active, setActive] = useState(0);

    return (
        <section className="process-section section">
            <div className="container">
                <div className="section-label"><span>03</span><span>Process</span></div>
                <h2 className="section-title">
                    A predictable path from kickoff to hand-off.
                </h2>
                <p className="process-intro">
                    Engagements typically run 8–14 weeks. You'll know what's shipping, when,
                    and what 'done' looks like — at every step.
                </p>

                <div className="timeline">
                    <div className="timeline-track" aria-hidden="true" />
                    <div className="timeline-steps">
                        {steps.map((step, i) => (
                            <button
                                key={i}
                                className={`timeline-node ${active === i ? 'active' : ''}`}
                                onMouseEnter={() => setActive(i)}
                                onFocus={() => setActive(i)}
                                onClick={() => setActive(i)}
                            >
                                <div className="node-marker" />
                                <div className="node-num">{step.num}</div>
                                <div className="node-title">{step.title}</div>
                                <div className="node-weeks">wk {step.weeks}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="step-detail"
                        style={{ display: active === i ? undefined : 'none' }}
                        aria-hidden={active !== i}
                    >
                        <div className="detail-left">
                            <div className="detail-eyebrow">
                                {step.num} &middot; {step.title}
                            </div>
                            <p className="detail-desc">{step.desc}</p>
                        </div>
                        <div className="detail-right">
                            <div>
                                <div className="detail-eyebrow">Deliverable</div>
                                <div className="detail-deliverable">{step.deliverable}</div>
                            </div>
                            <div>
                                <div className="detail-eyebrow">Duration</div>
                                <div className="detail-duration">{step.duration} weeks</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
