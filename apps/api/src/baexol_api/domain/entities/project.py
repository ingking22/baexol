"""도메인 엔티티 — 외부 의존성 없는 순수 비즈니스 모델."""

from __future__ import annotations

from dataclasses import dataclass, field


@dataclass(frozen=True, slots=True)
class Project:
    """포트폴리오 프로젝트(케이스 스터디) 엔티티.

    아직 내용은 placeholder. 실제 사례는 추후 outbound 어댑터를 통해 주입한다.
    """

    slug: str
    title: str
    summary: str
    tech: tuple[str, ...] = field(default_factory=tuple)
