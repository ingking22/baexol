"""아웃바운드 포트 — 애플리케이션이 의존하는 추상 인터페이스.

구체 구현(DB, 메모리, 외부 API)은 adapters/outbound 에 둔다.
의존성 역전(DIP): 애플리케이션 → 포트(추상) ← 어댑터(구체).
"""

from __future__ import annotations

from abc import ABC, abstractmethod

from baexol_api.domain.entities.project import Project


class ProjectRepository(ABC):
    @abstractmethod
    def list_all(self) -> list[Project]:
        """모든 프로젝트를 반환한다."""
        raise NotImplementedError
